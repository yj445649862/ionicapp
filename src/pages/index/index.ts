import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {UserPage} from '../user/user'
declare var Wechat;
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  //标题
  title: string = "女装尖货 - 单件月销1.8万"
  //描述
  description: string = "行业精选女装 好货任你挑";
  //分享链接
  link: string = "http://dress.tongedev.cn";
  //分享图片
  image: string = "https://mmbiz.qlogo.cn/mmbiz_png/khImeKLbVF7u5qdXdicpapLl9diadj5db6xHxdlVgxmYPxkYOR8WyVgOw4tn3EHEsvd9hlfu7zEpgVLYkLh28Nibg/0?wx_fmt=png";

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCont:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  gotoUserCenter(){
    try {
      Wechat.share({
        message: {
          title: this.title,
          description: this.description,
          thumb: this.image,
          mediaTagName: "TEST-TAG-001",
          messageExt: "",  // 这是第三方带的测试字段
          messageAction: "", // <action>dotalist</action>
          media: {
            type: Wechat.Type.WEBPAGE,
            webpageUrl: this.link
          }
        },
        scene:  Wechat.Scene.Timeline  // share to Timeline
      }, function () {
        alert("分享成功！");
      }, function (reason) {
        alert("Failed: " + reason);
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
    // this.navCtrl.push(UserPage)
  }
}
