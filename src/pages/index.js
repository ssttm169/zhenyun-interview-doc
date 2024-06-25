import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../components/HomepageFeatures/styles.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <section className={styles.features}>
          <div className="container">

            <div>
              <h2>关于我</h2>
              <p>
                精通html5, css3, JQuery并能够使用bootstrap等框架，开发响应式网站和解决不同浏览器的兼容问题。<br />
                精通 Node.js， es6标准，async/await, promise, Express\koa, 中间件, 前后端分离 RESTful API以及全栈开发。<br />
                精通Vue.js框架，以及nuxt.js(SSR), vuex, router, axios, element等生态插件。<br />
                熟悉微信小程序开发，mpvue，wepy，微信jssdk， 并对微信机器人开发有实践经验。<br />
                熟悉webpack、gulp等构建工具，以及less，sass，postcss等css预处理工具。<br />
                熟悉Redis、MongoDB，MySQL， MSSQL等数据存储和缓存技术。<br />
                熟悉使用Chrome DevTools, FireBug, Fundebug, Charles, Fiddler, Postman, DHC等测试调试工具。<br />
                熟悉使用HB开发web app, 以及wap2app, ionic等打包apk, ipa发布应用市场 和App Store。<br />
                熟练使用git, github， svn代码版本管理。<br />
                熟悉Linux操作，懂得一些shell常用命令。<br />
                对高并发的大型网站有做过研究，并给出很好的解决方案。<br />
                有英语基础，能够读懂纯英文技术开发文档和做普通口语交流。<br />
                除了以上的相关技术和技能，我经常关注，实践一些工具, 架框和技术, 比如 Deno, Docker, 飞冰, Flutter, PWA, Headless, 前后端同构以及最新的技术趋势。<br />
              </p>

              <p>
                Github<br />
                https://github.com/ssttm169<br /><br />

                个人博客<br />
                http://www.itomtan.com<br /><br />

                项目开发经验分享<br />
                https://book.itomtan.com/<br /><br />


                掘金<br />
                https://juejin.im/user/5a4d88aef265da43062b2ced/posts<br /><br />
                微信: tom169<br />
              </p>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}