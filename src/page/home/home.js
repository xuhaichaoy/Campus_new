import React, {useEffect} from 'react'
import { Tabs, Badge, PullToRefresh, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom'
import HomeHook from '../../hooks/homeHook'
import "./home.css";

function Home() {
  const [refreshing, down, style, data, tabs, refresh, handleChange, handleClick, pull] = HomeHook()

  tabs.map(badge => {
    return {
      title: <Badge key={badge}>{badge}</Badge>
    }
  })

  useEffect(() => {
    console.log(pull)
  }, [])
  

  return (
    <div className="tabsIndex">
      <Tabs tabs={tabs}
        initialPage={1}
        onChange={(tab, index) => handleChange(tab, index)}
        onTabClick={(tab, index) => handleClick(tab, index)}
      >
        <div className="tabItem">
          <PullToRefresh
            damping={60}
            // ref={pull}
            // ref = {el => this.ptr = el}
            style={style}
            indicator={down ? {} : { deactivate: '上拉可以刷新' }}
            direction={down ? 'down' : 'up'}
            refreshing={refreshing}
            onRefresh={() => refresh}
          >
            <div className="attentBox">
              <div className="attention">
                <div className="attentionBox">
                  <div className="attentionIcons">

                  </div>
                  <div className="attentionTips">
                    当前还没有关注的相关内容号、圈子等
                  </div>
                  <div className="addAttentionBtn">
                    添加关注
                  </div>
                </div>
              </div>

              <div className="attentionListBox">
                <div className="attentionListTips">
                  <div className="attentTips">
                    您可能感兴趣
                  </div>
                  <div className="attentBtns">
                    <i></i>
                    <span>换一批</span>
                  </div>
                </div>
                {data.map(i => (
                  <div key={i} className="attentionListItem">
                    1111111111111111111111111111111111111111
                  </div>
                ))}
              </div>
            </div>


          </PullToRefresh>
        </div>
        <div className="tabItem">
          <PullToRefresh
            damping={60}
            //   ref={el => this.ptr = el}
            style={style}
            indicator={down ? {} : { deactivate: '上拉可以刷新' }}
            direction={down ? 'down' : 'up'}
            refreshing={refreshing}
            onRefresh={() => refresh}
          >
            <div className="cardBox">
              {data.map(i => (
                <div key={i} className="cardItem">
                  <div className="cardTopBox">
                    <div className="cardImg">
                      <img src="//wcdn1.cgyouxi.com/avatar/55865771_1594108289_middle.jpg" />
                      <div className="cardNameBox">
                        <div className="cardName">
                          橙子🍊
                        </div>
                        <div className="cardSchool">
                          北京大学2018级
                        </div>
                      </div>

                      <div className="collectBtn">
                        <Icon type="ellipsis" />
                      </div>
                    </div>
                  </div>
                  <div className="cardContent">
                    <Link to={`/detail/${i}`} >
                      <div className="cardWords">
                        魔教少主如何追杀正道？
                        “大家好，我叫枕玉，因为偷偷修魔被师尊推下山崖结束了罪e的一生。但是我不会就这样轻易地狗带！现征集好心人给我打999999灵力让我一刀9999999，一拳一个小朋友，事成之后我给你个天蓬元帅当当。”（划掉）
                        本片又名《如何看待魔教少主被一群正道包围不知所措》
                        枕玉大难不死，为了拿到藏在秘密禁地的力量，化名青禾与自己带着“正道buff”的仇人一起走上了寻秘之路。在这次意料之外的旅途之中，枕玉找到了杀死“正道”的办法……
                      </div>
                    </Link>
                    <div className="cardContentImgBox">
                      <img src="//pic.cgyouxi.com/orange/upload/202012/79031554_2fa4ff1e09657db2a72f3d4f3b2ef859.jpg!n300" className="cardContentImgItem" />
                      <img src="//pic.cgyouxi.com/orange/upload/202012/7545149_d2db5203a9b689fac7f25cbaa23b3040.png!n300" className="cardContentImgItem" />
                      <img src="//pic.cgyouxi.com/orange/upload/202012/7545149_d2db5203a9b689fac7f25cbaa23b3040.png!n300" className="cardContentImgItem" />
                    </div>
                  </div>
                  <div className="cardBtnsBox">
                    <div className="cardBtnsItem">
                      <i className="zan"></i>
                      <span>6</span>
                    </div>
                    <Link to={`/detail/${i}`} >
                      <div className="cardBtnsItem">
                        <i className="comment"></i>
                        <span>2</span>
                      </div>
                    </Link>
                    <div className="cardBtnsItem">
                      <i className="face"></i>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PullToRefresh>
        </div>
      </Tabs>
    </div>

  )
}

export default Home