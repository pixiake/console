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
  'Federated Schedule': '联邦部署',
  'Fixed Replicas': '固定副本部署',
  Federated_Schedule_Text:
    '设定的总副本数将按照设定的权重分配到选择的集群中，非可用集群的副本会自动迁移到可用集群上。',
  Fixed_Deploy_text: '明确指定各集群所需部署的副本数。',
  Weight: '权重',
  TOTAL_REPLICAS: '总副本数',
  'Please input total replicas num': '请输入副本总数',
  'replicas input invalid': '请输入正确的副本数',
  'Storage Function Manage': '存储卷功能管理',
  'Volume Clone': '存储卷克隆',
  Volume_Clone_Des: '创建一个相同的存储卷。',
  Volume_SnapShot_Des: '创建一个存储卷快照，可用于创建其他存储卷。',
  'Volume Expansion': '存储卷扩容',
  Volume_Expansion_Des:
    '增加存储卷的容量。无法在控制台上减少存储卷的容量，因为数据可能会因此丢失。',
}
