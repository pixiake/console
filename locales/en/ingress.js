/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
  ADD_ANNOTATION: 'Add Annotation',
  ADD_PATH_TCAP: 'Add',
  ADD_PATH_TIP: 'Please add at least one path.',
  AUTO_GENERATE_TCAP: 'Auto Generate',
  ADD_ROUTE_RULE_TCAP: 'Add Route Rule',
  'Add Path': 'Add Path',
  'Auto Generate': 'Auto Generate',
  'Click to visit': 'Click to visit',
  'Create Route': 'Create Route',
  EDIT_ANNOTATION: 'Edit Annotation',
  EDIT_RULE: 'Edit Rule',
  GATEWAY_ADDRESS_TCAP: 'Gateway Address',
  'Gateway IP': 'Gateway IP',
  'Gateway Type': 'Gateway Type',
  DOMAIN_NAME_TCAP: 'Domain Name',
  INVALID_DOMAIN_TIP: 'Invalid domain name.',
  INVALID_PATH_TIP: 'Please set a correct path.',
  MODE_TCAP: 'Mode',
  PATH_PL: 'Paths',
  PATH_SI: 'Path',
  ADD_ROUTE_RULE_DESC: 'Add a route rule to map a domain name to a Service.',
  DOMAIN_NAME_TIP: 'Please enter a domain name.',
  PATH_SERVICE_TIP: 'Service',
  Route: 'Route',
  ROUTE_RULES_TCAP: 'Route Rules',
  Rules: 'Rules',
  SET_ROUTE_RULE_TCAP: 'Set Route Rule',
  SPECIFY_DOMAIN_TCAP: 'Specify Domain',
  'Unable to access': 'Unable to access',

  ROUTE_DESC:
    'A Route provides a way to aggregate Services. You can expose the internal Services outside the cluster through an externally accessible IP address.',
  ROUTE_CREATE_DESC:
    'A Route provides a way to aggregate Services. You can expose the internal Services outside the cluster through an externally accessible IP address.',
  ROUTE_ANNOTATION_DESC:
    'You can set route behavior by adding annotations to the route. See <a href="https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/" target="_blank">Annotations</a> for the detailed list of available annotations.',

  RULE_SETTING_MODE_AUTO:
    'Configure a path to automatically generate a domain name in the format of &ltService name&gt + &ltProject name&gt + &ltGateway address&gt + nip.io to access the Service via &ltService name&gt.&ltProject name&gt.&ltGateway address&gt.nip.io:&ltNodePort&gt. <br/>Please ensure that your network environment can access the gateway address.',
  RULE_SETTING_MODE_SPECIFY:
    'Specify a custom domain name and use the local hosts file or a DNS server to resolve the domain name into the gateway IP address.',
  GATEWAY_SERVICE_MESH_STATUS_ON: 'On',
  GATEWAY_SERVICE_MESH_STATUS_OFF: 'Off',

  INGRESS_CONTROLLER_NODEPORT_DESC:
    'If the gateway is enabled, the system will automatically assign port numbers of http and https. Application routes can access Services through the reverse proxy.',
  INGRESS_CONTROLLER_LOADBALANCER_DESC:
    'To use QingCloud LoadBalancer as a service gateway, please deploy the QingCloud Cloud Controller Manager plugin first.',

  NO_INTERNET_ACCESS_TIP:
    'To use Auto Generate, please contact the project administrator to set the gateway access method in Advanced Settings of the project.',
  UNABLE_CREATE_ROUTE_TIP:
    'The available gateway address is not found in the current project so the application route cannot be created.',

  GATEWAY_APPLICATION_GOVERNANCE_TIP:
    'You don\'t need to enable Application Governance if you don\'t use the Tracing feature. Once Application Governance is enabled, please check if an annotation like "nginx.ingress.kubernetes.io/service-upstream: true" is added for the application route when the route is inaccessible. If not, please add one.',

  UNABLE_TO_ACCESS_TIP:
    '● Make sure that the domain name you set can be resolved to the IP address of the access portal. <br/>● If you are in a private cloud environment, modify the local host file and then access it via {$domain name}:{$node port}.<br/>● By configuring DNS access, you need to modify the domain name to {$hostname} + {$gateway address} + nip.io, and then access the service via {$hostname}.{$gateway address} .nip.io:{$NodePort}. <br/>● If the access is blocked when you use the domain name, please confirm if your domain name exists and has been registered.',

  PREREQUESTS_FOR_USE_ROUTE_Q: 'Prerequisites for using routes',
  PREREQUESTS_FOR_USE_ROUTE_A:
    'To use the route, the administrator needs to set the Internet Access for the current project.',

  ACCESS_TYPES_OF_ROUTE_Q: 'Access types the route supports',
  ACCESS_TYPES_OF_ROUTE_A:
    'KubeSphere routes support custom domain names (HostName) and the wildcard DNS access method.',
}
