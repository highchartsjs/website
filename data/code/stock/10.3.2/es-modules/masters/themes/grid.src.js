/**
 * @license Highcharts JS v10.3.2 (2022-11-29)
 * @module highcharts/themes/grid
 * @requires highcharts
 *
 * (c) 2009-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import H from '../../Core/Globals.js';
import GridTheme from '../../Extensions/Themes/Grid.js';
H.theme = GridTheme.options;
GridTheme.apply();
