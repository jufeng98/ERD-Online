import {ProCard, StatisticCard} from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import React, {useEffect, useState} from 'react';
import {Col, Row} from "antd";
import {GET} from '@/services/crud';


export type HomeProps = {};
const Home: React.FC<HomeProps> = (props) => {

  const [responsive, setResponsive] = useState(false);

  const [dateInfo, setDateInfo] = useState('');

  const [statisticInfo, setStatisticInfo] = useState({
    yesterday: 0,
    today: 0,
    month: 0,
    total: -1
  });

  const fetchStatistic = () => {
    GET("/ncnb/project/statistic", {}).then(r => {
      console.log(24, r);
      if (r?.code === 200) {
        setStatisticInfo(r.data);
      }
    })
  }

  useEffect(() => {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();
    // @ts-ignore
    month < 10 ? (month = "0" + month) : month;
    // month = month + 1;
    // @ts-ignore
    hour < 10 ? (hour = "0" + hour) : hour;
    // @ts-ignore
    minutes < 10 ? (minutes = "0" + minutes) : minutes;
    // @ts-ignore
    second < 10 ? (second = "0" + second) : second;
    let now_time =
      year +
      "年" +
      month +
      "月" +
      date +
      "日";
    setDateInfo(now_time);
    fetchStatistic();


  },[statisticInfo.total])

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title="数据概览"
        extra={dateInfo}
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '设计中模型',
                  value: statisticInfo.today,
                  suffix: '个',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '昨日全部模型',
                  value: statisticInfo.yesterday,
                  suffix: '个',
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '本月累计模型',
                  value: statisticInfo.month,
                  suffix: '个',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '历史模型总数',
                  value: statisticInfo.total,
                  suffix: '个',
                }}
              />
            </ProCard>
          </ProCard>
          <ProCard
            title="学习资料"
            headerBordered
            collapsible
            defaultCollapsed
            onCollapse={(collapse) => console.log(collapse)}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <a href="https://www.bilibili.com/video/BV1sG4y1H7or/?vd_source=04770befcf89230f48dbdad9b77555d5"
                   target="_blank">
                  ERD Online 视频简介
                </a>
              </Col>
              <Col span={12}>
                <a href="https://portal.zerocode.net.cn/docs/quick-start/introduction" target="_blank">
                  ERD Online 业务架构介绍
                </a>
              </Col>
              <Col span={12}>
                <a href="https://portal.zerocode.net.cn/docs/quick-start/a-basic-project" target="_blank">
                  ERD Online 快速入门
                </a>
              </Col>
              <Col span={12}>
                <a href="https://portal.zerocode.net.cn/docs/quick-start/try-out-install" target="_blank">
                  ERD Online 快速安装
                </a>
              </Col>
              <Col span={12}>
                <a href="https://portal.zerocode.net.cn/docs/quick-start/compatibility" target="_blank">
                  ERD Online 服务器兼容性列表
                </a>
              </Col>
              <Col span={12}>
                <a href="https://portal.zerocode.net.cn/docs/quick-start/jdbc" target="_blank">
                  ERD Online JDBC驱动版本
                </a>
              </Col>
              <Col span={12}>
                <a href="https://portal.zerocode.net.cn/docs/comparison" target="_blank">
                  ERD Online 同类产品横向对比
                </a>
              </Col>
            </Row>
          </ProCard>
          <ProCard
            title="历史材料"
            headerBordered
            collapsible
            defaultCollapsed
            onCollapse={(collapse) => console.log(collapse)}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <a href="https://portal.zerocode.net.cn/docs/changelog" target="_blank">
                  ERD Online 变更日志
                </a>
              </Col>
              <Col span={12}>
                <a href="https://js.design/f/3iRGn_?p=4rCfiHWVrO" target="_blank">
                  ERD Online 原型设计稿
                </a>
              </Col>
              <Col span={12}>
                <a href="https://www.zerocode.net.cn/thread/101" target="_blank">
                  ERD Online ERD Online适用场景分析
                </a>
              </Col>

            </Row>
          </ProCard>
          <ProCard
            title="问题交流"
            headerBordered
            collapsible
            defaultCollapsed
            onCollapse={(collapse) => console.log(collapse)}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <a href="https://portal.zerocode.net.cn/docs/faq" target="_blank">
                  ERD Online 问题解答
                </a>
              </Col>
              <Col span={12}>
                <a href="https://www.zerocode.net.cn/thread/57" target="_blank">
                  ERDOnline 一键部署异常问题处理
                </a>
              </Col>
            </Row>
          </ProCard>
          <ProCard
            title="需求定制"
            headerBordered
            collapsible
            defaultCollapsed
            onCollapse={(collapse) => console.log(collapse)}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <a href="https://www.yuque.com/xuelahuaxiang/erdonline/vygtk5?# 《定制流程》" target="_blank">
                  ERD Online 功能定制（合同制）
                </a>
              </Col>
            </Row>
          </ProCard>
          <ProCard
            title="我要源码"
            headerBordered
            collapsible
            defaultCollapsed
            onCollapse={(collapse) => console.log(collapse)}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <a href="https://portal.zerocode.net.cn/docs/source" target="_blank">
                  ERD Online 获取源码（免费或付费）
                </a>
              </Col>
            </Row>
          </ProCard>
        </ProCard>

      </ProCard>
    </RcResizeObserver>
  );

}
export default React.memo(Home)
