import Mock from 'mockjs'
export default {
  getMenu: config => {
    // console.log(config);
    const { username, password } = JSON.parse(config.body)
    // console.log(JSON.parse(config.body))
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/',
              name: 'Home',
              label: '首页',
              icon: 's-home',
              url: 'HomePage.vue'
            },
            {
              path: '/mall',
              name: 'Mall',
              label: '商品管理',
              icon: 'video-play',
              url: 'MallPage.vue'
            },
            {
              path: '/user',
              name: 'User',
              label: '用户管理',
              icon: 'user',
              url: 'UserPage.vue'
            },
            {
              label: '其他',
              icon: 'location',
              children: [
                {
                  path: '/page1',
                  name: 'Page1',
                  label: '页面1',
                  icon: 'setting',
                  url: 'PageOne.vue'
                },
                {
                  path: '/page2',
                  name: 'Page2',
                  label: '页面2',
                  icon: 'setting',
                  url: 'PageTwo.vue'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/',
              name: 'Home',
              label: '首页',
              icon: 's-home',
              url: 'Home/Home'
            },
            {
              path: '/video',
              name: 'Video',
              label: '商品管理',
              icon: 'video-play',
              url: 'VideoManage/VideoManage'
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}
