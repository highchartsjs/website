/* *
 *
 *  (c) 2016 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import BrokenAxis from '../BrokenAxis.js';
import GridAxis from '../GridAxis.js';
import Tree from '../../../Gantt/Tree.js';
import TreeGridTick from './TreeGridTick.js';
import TU from '../../../Series/TreeUtilities.js';
const { getLevelOptions } = TU;
import U from '../../Utilities.js';
const { addEvent, find, fireEvent, isArray, isObject, isString, merge, pick, wrap } = U;
/* *
 *
 *  Constants
 *
 * */
const composedMembers = [];
/* *
 *
 *  Variables
 *
 * */
let TickConstructor;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function getBreakFromNode(node, max) {
    const to = node.collapseEnd || 0;
    let from = node.collapseStart || 0;
    // In broken-axis, the axis.max is minimized until it is not within a
    // break. Therefore, if break.to is larger than axis.max, the axis.to
    // should not add the 0.5 axis.tickMarkOffset, to avoid adding a break
    // larger than axis.max.
    // TODO consider simplifying broken-axis and this might solve itself
    if (to >= max) {
        from -= 0.5;
    }
    return {
        from: from,
        to: to,
        showPoints: false
    };
}
/**
 * Creates a tree structure of the data, and the treegrid. Calculates
 * categories, and y-values of points based on the tree.
 *
 * @private
 * @function getTreeGridFromData
 *
 * @param {Array<Highcharts.GanttPointOptions>} data
 * All the data points to display in the axis.
 *
 * @param {boolean} uniqueNames
 * Whether or not the data node with the same name should share grid cell. If
 * true they do share cell. False by default.
 *
 * @param {number} numberOfSeries
 *
 * @return {Object}
 * Returns an object containing categories, mapOfIdToNode,
 * mapOfPosToGridNode, and tree.
 *
 * @todo There should be only one point per line.
 * @todo It should be optional to have one category per point, or merge
 *       cells
 * @todo Add unit-tests.
 */
function getTreeGridFromData(data, uniqueNames, numberOfSeries) {
    const categories = [], collapsedNodes = [], mapOfIdToNode = {}, uniqueNamesEnabled = typeof uniqueNames === 'boolean' ?
        uniqueNames : false;
    let mapOfPosToGridNode = {}, posIterator = -1;
    // Build the tree from the series data.
    const treeParams = {
        // After the children has been created.
        after: function (node) {
            const gridNode = mapOfPosToGridNode[node.pos];
            let height = 0, descendants = 0;
            gridNode.children.forEach(function (child) {
                descendants += (child.descendants || 0) + 1;
                height = Math.max((child.height || 0) + 1, height);
            });
            gridNode.descendants = descendants;
            gridNode.height = height;
            if (gridNode.collapsed) {
                collapsedNodes.push(gridNode);
            }
        },
        // Before the children has been created.
        before: function (node) {
            const data = isObject(node.data, true) ?
                node.data :
                {}, name = isString(data.name) ? data.name : '', parentNode = mapOfIdToNode[node.parent], parentGridNode = (isObject(parentNode, true) ?
                mapOfPosToGridNode[parentNode.pos] :
                null), hasSameName = function (x) {
                return x.name === name;
            };
            let gridNode, pos;
            // If not unique names, look for sibling node with the same name
            if (uniqueNamesEnabled &&
                isObject(parentGridNode, true) &&
                !!(gridNode = find(parentGridNode.children, hasSameName))) {
                // If there is a gridNode with the same name, reuse position
                pos = gridNode.pos;
                // Add data node to list of nodes in the grid node.
                gridNode.nodes.push(node);
            }
            else {
                // If it is a new grid node, increment position.
                pos = posIterator++;
            }
            // Add new grid node to map.
            if (!mapOfPosToGridNode[pos]) {
                mapOfPosToGridNode[pos] = gridNode = {
                    depth: parentGridNode ? parentGridNode.depth + 1 : 0,
                    name: name,
                    id: data.id,
                    nodes: [node],
                    children: [],
                    pos: pos
                };
                // If not root, then add name to categories.
                if (pos !== -1) {
                    categories.push(name);
                }
                // Add name to list of children.
                if (isObject(parentGridNode, true)) {
                    parentGridNode.children.push(gridNode);
                }
            }
            // Add data node to map
            if (isString(node.id)) {
                mapOfIdToNode[node.id] = node;
            }
            // If one of the points are collapsed, then start the grid node
            // in collapsed state.
            if (gridNode &&
                data.collapsed === true) {
                gridNode.collapsed = true;
            }
            // Assign pos to data node
            node.pos = pos;
        }
    };
    const updateYValuesAndTickPos = function (map, numberOfSeries) {
        const setValues = function (gridNode, start, result) {
            const nodes = gridNode.nodes, padding = 0.5;
            let end = start + (start === -1 ? 0 : numberOfSeries - 1);
            const diff = (end - start) / 2, pos = start + diff;
            nodes.forEach(function (node) {
                const data = node.data;
                if (isObject(data, true)) {
                    // Update point
                    data.y = start + (data.seriesIndex || 0);
                    // Remove the property once used
                    delete data.seriesIndex;
                }
                node.pos = pos;
            });
            result[pos] = gridNode;
            gridNode.pos = pos;
            gridNode.tickmarkOffset = diff + padding;
            gridNode.collapseStart = end + padding;
            gridNode.children.forEach(function (child) {
                setValues(child, end + 1, result);
                end = (child.collapseEnd || 0) - padding;
            });
            // Set collapseEnd to the end of the last child node.
            gridNode.collapseEnd = end + padding;
            return result;
        };
        return setValues(map['-1'], -1, {});
    };
    // Create tree from data
    const tree = Tree.getTree(data, treeParams);
    // Update y values of data, and set calculate tick positions.
    mapOfPosToGridNode = updateYValuesAndTickPos(mapOfPosToGridNode, numberOfSeries);
    // Return the resulting data.
    return {
        categories: categories,
        mapOfIdToNode: mapOfIdToNode,
        mapOfPosToGridNode: mapOfPosToGridNode,
        collapsedNodes: collapsedNodes,
        tree: tree
    };
}
/**
 * Builds the tree of categories and calculates its positions.
 * @private
 * @param {Object} e Event object
 * @param {Object} e.target The chart instance which the event was fired on.
 * @param {object[]} e.target.axes The axes of the chart.
 */
function onBeforeRender(e) {
    const chart = e.target, axes = chart.axes;
    axes.filter(function (axis) {
        return axis.options.type === 'treegrid';
    }).forEach(function (axis) {
        const options = axis.options || {}, labelOptions = options.labels, uniqueNames = options.uniqueNames, max = options.max, 
        // Check whether any of series is rendering for the first
        // time, visibility has changed, or its data is dirty, and
        // only then update. #10570, #10580. Also check if
        // mapOfPosToGridNode exists. #10887
        isDirty = (!axis.treeGrid.mapOfPosToGridNode ||
            axis.series.some(function (series) {
                return !series.hasRendered ||
                    series.isDirtyData ||
                    series.isDirty;
            }));
        let numberOfSeries = 0, data, treeGrid;
        if (isDirty) {
            // Concatenate data from all series assigned to this axis.
            data = axis.series.reduce(function (arr, s) {
                if (s.visible) {
                    // Push all data to array
                    (s.options.data || []).forEach(function (data) {
                        // For using keys - rebuild the data structure
                        if (s.options.keys && s.options.keys.length) {
                            data = s.pointClass.prototype
                                .optionsToObject
                                .call({ series: s }, data);
                            s.pointClass.setGanttPointAliases(data);
                        }
                        if (isObject(data, true)) {
                            // Set series index on data. Removed again
                            // after use.
                            data.seriesIndex = (numberOfSeries);
                            arr.push(data);
                        }
                    });
                    // Increment series index
                    if (uniqueNames === true) {
                        numberOfSeries++;
                    }
                }
                return arr;
            }, []);
            // If max is higher than set data - add a
            // dummy data to render categories #10779
            if (max && data.length < max) {
                for (let i = data.length; i <= max; i++) {
                    data.push({
                        // Use the zero-width character
                        // to avoid conflict with uniqueNames
                        name: i + '\u200B'
                    });
                }
            }
            // setScale is fired after all the series is initialized,
            // which is an ideal time to update the axis.categories.
            treeGrid = getTreeGridFromData(data, uniqueNames || false, (uniqueNames === true) ? numberOfSeries : 1);
            // Assign values to the axis.
            axis.categories = treeGrid.categories;
            axis.treeGrid.mapOfPosToGridNode = (treeGrid.mapOfPosToGridNode);
            axis.hasNames = true;
            axis.treeGrid.tree = treeGrid.tree;
            // Update yData now that we have calculated the y values
            axis.series.forEach(function (series) {
                const axisData = (series.options.data || []).map(function (d) {
                    if (isArray(d) &&
                        series.options.keys &&
                        series.options.keys.length) {
                        // Get the axisData from the data array used to
                        // build the treeGrid where has been modified
                        data.forEach(function (point) {
                            if (d.indexOf(point.x) >= 0 &&
                                d.indexOf(point.x2) >= 0) {
                                d = point;
                            }
                        });
                    }
                    return isObject(d, true) ? merge(d) : d;
                });
                // Avoid destroying points when series is not visible
                if (series.visible) {
                    series.setData(axisData, false);
                }
            });
            // Calculate the label options for each level in the tree.
            axis.treeGrid.mapOptionsToLevel =
                getLevelOptions({
                    defaults: labelOptions,
                    from: 1,
                    levels: labelOptions && labelOptions.levels,
                    to: axis.treeGrid.tree && axis.treeGrid.tree.height
                });
            // Setting initial collapsed nodes
            if (e.type === 'beforeRender') {
                axis.treeGrid.collapsedNodes = treeGrid.collapsedNodes;
            }
        }
    });
}
/**
 * Generates a tick for initial positioning.
 *
 * @private
 * @function Highcharts.GridAxis#generateTick
 *
 * @param {Function} proceed
 * The original generateTick function.
 *
 * @param {number} pos
 * The tick position in axis values.
 */
function wrapGenerateTick(proceed, pos) {
    const axis = this, mapOptionsToLevel = axis.treeGrid.mapOptionsToLevel || {}, isTreeGrid = axis.options.type === 'treegrid', ticks = axis.ticks;
    let tick = ticks[pos], levelOptions, options, gridNode;
    if (isTreeGrid &&
        axis.treeGrid.mapOfPosToGridNode) {
        gridNode = axis.treeGrid.mapOfPosToGridNode[pos];
        levelOptions = mapOptionsToLevel[gridNode.depth];
        if (levelOptions) {
            options = {
                labels: levelOptions
            };
        }
        if (!tick &&
            TickConstructor) {
            ticks[pos] = tick =
                new TickConstructor(axis, pos, void 0, void 0, {
                    category: gridNode.name,
                    tickmarkOffset: gridNode.tickmarkOffset,
                    options: options
                });
        }
        else {
            // update labels depending on tick interval
            tick.parameters.category = gridNode.name;
            tick.options = options;
            tick.addLabel();
        }
    }
    else {
        proceed.apply(axis, Array.prototype.slice.call(arguments, 1));
    }
}
/**
 * @private
 */
function wrapInit(proceed, chart, userOptions) {
    const axis = this, isTreeGrid = userOptions.type === 'treegrid';
    if (!axis.treeGrid) {
        axis.treeGrid = new TreeGridAxisAdditions(axis);
    }
    // Set default and forced options for TreeGrid
    if (isTreeGrid) {
        // Add event for updating the categories of a treegrid.
        // NOTE Preferably these events should be set on the axis.
        addEvent(chart, 'beforeRender', onBeforeRender);
        addEvent(chart, 'beforeRedraw', onBeforeRender);
        // Add new collapsed nodes on addseries
        addEvent(chart, 'addSeries', function (e) {
            if (e.options.data) {
                const treeGrid = getTreeGridFromData(e.options.data, userOptions.uniqueNames || false, 1);
                axis.treeGrid.collapsedNodes = (axis.treeGrid.collapsedNodes || []).concat(treeGrid.collapsedNodes);
            }
        });
        // Collapse all nodes in axis.treegrid.collapsednodes
        // where collapsed equals true.
        addEvent(axis, 'foundExtremes', function () {
            if (axis.treeGrid.collapsedNodes) {
                axis.treeGrid.collapsedNodes.forEach(function (node) {
                    const breaks = axis.treeGrid.collapse(node);
                    if (axis.brokenAxis) {
                        axis.brokenAxis.setBreaks(breaks, false);
                        // remove the node from the axis collapsedNodes
                        if (axis.treeGrid.collapsedNodes) {
                            axis.treeGrid.collapsedNodes = axis.treeGrid
                                .collapsedNodes
                                .filter((n) => ((node.collapseStart !==
                                n.collapseStart) ||
                                node.collapseEnd !== n.collapseEnd));
                        }
                    }
                });
            }
        });
        // If staticScale is not defined on the yAxis
        // and chart height is set, set axis.isDirty
        // to ensure collapsing works (#12012)
        addEvent(axis, 'afterBreaks', function () {
            if (axis.coll === 'yAxis' &&
                !axis.staticScale &&
                axis.chart.options.chart.height) {
                axis.isDirty = true;
            }
        });
        userOptions = merge({
            // Default options
            grid: {
                enabled: true
            },
            // TODO: add support for align in treegrid.
            labels: {
                align: 'left',
                /**
                * Set options on specific levels in a tree grid axis. Takes
                * precedence over labels options.
                *
                * @sample {gantt} gantt/treegrid-axis/labels-levels
                *         Levels on TreeGrid Labels
                *
                * @type      {Array<*>}
                * @product   gantt
                * @apioption yAxis.labels.levels
                *
                * @private
                */
                levels: [{
                        /**
                        * Specify the level which the options within this object
                        * applies to.
                        *
                        * @type      {number}
                        * @product   gantt
                        * @apioption yAxis.labels.levels.level
                        *
                        * @private
                        */
                        level: void 0
                    }, {
                        level: 1,
                        /**
                         * @type      {Highcharts.CSSObject}
                         * @product   gantt
                         * @apioption yAxis.labels.levels.style
                         *
                         * @private
                         */
                        style: {
                            /** @ignore-option */
                            fontWeight: 'bold'
                        }
                    }],
                /**
                 * The symbol for the collapse and expand icon in a
                 * treegrid.
                 *
                 * @product      gantt
                 * @optionparent yAxis.labels.symbol
                 *
                 * @private
                 */
                symbol: {
                    /**
                     * The symbol type. Points to a definition function in
                     * the `Highcharts.Renderer.symbols` collection.
                     *
                     * @type {Highcharts.SymbolKeyValue}
                     *
                     * @private
                     */
                    type: 'triangle',
                    x: -5,
                    y: -5,
                    height: 10,
                    width: 10,
                    padding: 5
                }
            },
            uniqueNames: false
        }, userOptions, {
            // Forced options
            reversed: true,
            // grid.columns is not supported in treegrid
            grid: {
                columns: void 0
            }
        });
    }
    // Now apply the original function with the original arguments,
    // which are sliced off this function's arguments
    proceed.apply(axis, [chart, userOptions]);
    if (isTreeGrid) {
        axis.hasNames = true;
        axis.options.showLastLabel = true;
    }
}
/**
 * Set the tick positions, tickInterval, axis min and max.
 *
 * @private
 * @function Highcharts.GridAxis#setTickInterval
 *
 * @param {Function} proceed
 * The original setTickInterval function.
 */
function wrapSetTickInterval(proceed) {
    const axis = this, options = axis.options, isTreeGrid = options.type === 'treegrid';
    if (isTreeGrid) {
        axis.min = pick(axis.userMin, options.min, axis.dataMin);
        axis.max = pick(axis.userMax, options.max, axis.dataMax);
        fireEvent(axis, 'foundExtremes');
        // setAxisTranslation modifies the min and max according to
        // axis breaks.
        axis.setAxisTranslation();
        axis.tickmarkOffset = 0.5;
        axis.tickInterval = 1;
        axis.tickPositions = axis.treeGrid.mapOfPosToGridNode ?
            axis.treeGrid.getTickPositions() :
            [];
    }
    else {
        proceed.apply(axis, Array.prototype.slice.call(arguments, 1));
    }
}
/* *
 *
 *  Classes
 *
 * */
/**
 * @private
 * @class
 */
class TreeGridAxisAdditions {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * @private
     */
    static compose(AxisClass, ChartClass, SeriesClass, TickClass) {
        if (U.pushUnique(composedMembers, AxisClass)) {
            if (AxisClass.keepProps.indexOf('treeGrid') === -1) {
                AxisClass.keepProps.push('treeGrid');
            }
            const axisProps = AxisClass.prototype;
            wrap(axisProps, 'generateTick', wrapGenerateTick);
            wrap(axisProps, 'init', wrapInit);
            wrap(axisProps, 'setTickInterval', wrapSetTickInterval);
            // Make utility functions available for testing.
            axisProps.utils = {
                getNode: Tree.getNode
            };
        }
        if (U.pushUnique(composedMembers, TickClass)) {
            if (!TickConstructor) {
                TickConstructor = TickClass;
            }
        }
        GridAxis.compose(AxisClass, ChartClass, TickClass);
        BrokenAxis.compose(AxisClass, SeriesClass);
        TreeGridTick.compose(TickClass);
        return AxisClass;
    }
    /* *
     *
     *  Constructors
     *
     * */
    /**
     * @private
     */
    constructor(axis) {
        this.axis = axis;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Set the collapse status.
     *
     * @private
     *
     * @param {Highcharts.Axis} axis
     * The axis to check against.
     *
     * @param {Highcharts.GridNode} node
     * The node to collapse.
     */
    setCollapsedStatus(node) {
        const axis = this.axis, chart = axis.chart;
        axis.series.forEach(function (series) {
            const data = series.options.data;
            if (node.id && data) {
                const point = chart.get(node.id), dataPoint = data[series.data.indexOf(point)];
                if (point && dataPoint) {
                    point.collapsed = node.collapsed;
                    dataPoint.collapsed = node.collapsed;
                }
            }
        });
    }
    /**
     * Calculates the new axis breaks to collapse a node.
     *
     * @private
     *
     * @param {Highcharts.Axis} axis
     * The axis to check against.
     *
     * @param {Highcharts.GridNode} node
     * The node to collapse.
     *
     * @param {number} pos
     * The tick position to collapse.
     *
     * @return {Array<object>}
     * Returns an array of the new breaks for the axis.
     */
    collapse(node) {
        const axis = this.axis, breaks = (axis.options.breaks || []), obj = getBreakFromNode(node, axis.max);
        breaks.push(obj);
        // Change the collapsed flag #13838
        node.collapsed = true;
        axis.treeGrid.setCollapsedStatus(node);
        return breaks;
    }
    /**
     * Calculates the new axis breaks to expand a node.
     *
     * @private
     *
     * @param {Highcharts.Axis} axis
     * The axis to check against.
     *
     * @param {Highcharts.GridNode} node
     * The node to expand.
     *
     * @param {number} pos
     * The tick position to expand.
     *
     * @return {Array<object>}
     * Returns an array of the new breaks for the axis.
     */
    expand(node) {
        const axis = this.axis, breaks = (axis.options.breaks || []), obj = getBreakFromNode(node, axis.max);
        // Change the collapsed flag #13838
        node.collapsed = false;
        axis.treeGrid.setCollapsedStatus(node);
        // Remove the break from the axis breaks array.
        return breaks.reduce(function (arr, b) {
            if (b.to !== obj.to || b.from !== obj.from) {
                arr.push(b);
            }
            return arr;
        }, []);
    }
    /**
     * Creates a list of positions for the ticks on the axis. Filters out
     * positions that are outside min and max, or is inside an axis break.
     *
     * @private
     *
     * @return {Array<number>}
     * List of positions.
     */
    getTickPositions() {
        const axis = this.axis, roundedMin = Math.floor(axis.min / axis.tickInterval) * axis.tickInterval, roundedMax = Math.ceil(axis.max / axis.tickInterval) * axis.tickInterval;
        return Object.keys(axis.treeGrid.mapOfPosToGridNode || {}).reduce(function (arr, key) {
            const pos = +key;
            if (pos >= roundedMin &&
                pos <= roundedMax &&
                !(axis.brokenAxis && axis.brokenAxis.isInAnyBreak(pos))) {
                arr.push(pos);
            }
            return arr;
        }, []);
    }
    /**
     * Check if a node is collapsed.
     *
     * @private
     *
     * @param {Highcharts.Axis} axis
     * The axis to check against.
     *
     * @param {Object} node
     * The node to check if is collapsed.
     *
     * @param {number} pos
     * The tick position to collapse.
     *
     * @return {boolean}
     * Returns true if collapsed, false if expanded.
     */
    isCollapsed(node) {
        const axis = this.axis, breaks = (axis.options.breaks || []), obj = getBreakFromNode(node, axis.max);
        return breaks.some(function (b) {
            return b.from === obj.from && b.to === obj.to;
        });
    }
    /**
     * Calculates the new axis breaks after toggling the collapse/expand
     * state of a node. If it is collapsed it will be expanded, and if it is
     * exapended it will be collapsed.
     *
     * @private
     *
     * @param {Highcharts.Axis} axis
     * The axis to check against.
     *
     * @param {Highcharts.GridNode} node
     * The node to toggle.
     *
     * @return {Array<object>}
     * Returns an array of the new breaks for the axis.
     */
    toggleCollapse(node) {
        return (this.isCollapsed(node) ?
            this.expand(node) :
            this.collapse(node));
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default TreeGridAxisAdditions;