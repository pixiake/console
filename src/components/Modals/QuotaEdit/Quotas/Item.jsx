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

import React from 'react'

import { Input, Select } from '@kube-design/components'
import { QUOTAS_MAP } from 'utils/constants'
import { ObjectInput, NumberInput } from 'components/Inputs'

import {
  RESERVED_MODULES,
  FEDERATED_PROJECT_UNSOPPORT_QUOTA,
} from './constants'

export default class QuotaItem extends React.Component {
  get options() {
    const { arrayValue, value } = this.props
    const module = value.module
    const filterModules = arrayValue.map(_item => _item.module)
    const filteredModules = [
      ...filterModules.filter(m => m !== module),
      ...RESERVED_MODULES,
    ]

    return Object.keys(QUOTAS_MAP)
      .filter(
        key =>
          !filteredModules.includes(key) &&
          (this.props.isFederated
            ? !FEDERATED_PROJECT_UNSOPPORT_QUOTA.includes(key)
            : true)
      )
      .map(key => ({
        label: key === 'volumes' ? t('Number of volumes') : t(key),
        value: key,
      }))
  }

  handleLimitValue = item => {
    this.props.onChange(item)
  }

  renderInputByModule = () => {
    const { value } = this.props
    const mapKey = Object.keys(QUOTAS_MAP)
    if (mapKey.includes(value.module)) {
      return (
        <NumberInput
          name="value"
          className="margin-l12"
          placeholder={t(
            'You can limit the number of resources. Blank means no limit.'
          )}
          integer
        />
      )
    }
    return (
      <Input
        name="value"
        className="margin-l12"
        placeholder={t(
          'You can limit the number of resources. Blank means no limit.'
        )}
      />
    )
  }

  render() {
    const { value } = this.props

    return (
      <ObjectInput value={value} onChange={this.handleLimitValue}>
        <Select
          name="module"
          options={this.options}
          searchable
          disabled={value.module === 'pods'}
        />
        {this.renderInputByModule()}
      </ObjectInput>
    )
  }
}
