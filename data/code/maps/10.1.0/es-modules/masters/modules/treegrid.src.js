/**
 * @license Highcharts Gantt JS v10.1.0 (2022-05-20)
 * @module highcharts/modules/treegrid
 * @requires highcharts
 *
 * Tree Grid
 *
 * (c) 2016-2021 Jon Arild Nygard
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import TreeGridAxis from '../../Core/Axis/TreeGridAxis.js';
var G = Highcharts;
// Compositions
TreeGridAxis.compose(G.Axis, G.Chart, G.Series, G.Tick);
