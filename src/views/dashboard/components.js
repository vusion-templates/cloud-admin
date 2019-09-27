import Vue from 'vue';
import * as CloudUI from 'cloud-ui.vusion';
import * as Components from '@/global/components';
import filters from '@/global/filters';

import { installFilters, installDirectives, installComponents, installOptions } from 'vusion-utils';
installOptions(Vue);
installDirectives(Vue, CloudUI.directives);
installFilters(Vue, filters);
installComponents(Vue, CloudUI);
installComponents(Vue, Components);
