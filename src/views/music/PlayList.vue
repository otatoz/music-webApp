<template>
    <div class="playList">
        <!-- 头部 -->
        <div class="playListTop">
            <ul>
                <li @click="goBackHome">
                    <van-icon class="iconfont icon-sdf" />
                </li>
                <li>
                    <div>歌单</div>
                </li>
                <li>
                    <van-icon class="iconfont icon-search" />
                </li>
                <li>
                    <van-icon class="iconfont icon-ziyuan" />
                </li>
            </ul>
        </div>
        <!-- 歌单描述 -->
        <div class="playListDetail">
            <!-- 歌单封面 -->
            <div class="playListDetail_img">
                <img :src="playDetail.coverImgUrl" alt="">
            </div>
            <!-- 歌单详情 -->
            <div class="playListDetail_desc">
                <div class="playListDetail_title">
                    {{playDetail.name}}
                </div>
                <div class="playListDetail_author">
                    <div class="_authorImg">
                        <img :src="creator.avatarUrl" alt="">
                    </div>
                    <div class="_authorName">
                        {{creator.nickname}}
                    </div>
                </div>
                <div class="playListDetail_description">
                    {{playDetail.description}}
                </div>
            </div>
        </div>

        <!-- 歌单列表 -->
        <div class="songList">
            <ul v-for="item in songList" :key="item.id">
                <li>{{item.id}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return {
            creator:''
        }
    },
    created(){
        this.playListDetail(this.$route.query.id).then((res)=>{
            this.creator = res.data.playlist.creator
        })
        
    },
    computed:{
        ...mapState('home',['playDetail','songList'])
    },
    methods:{
        ...mapActions('home',['playListDetail']),
        // 返回首页
        goBackHome(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    ._authorName{
        margin-top: 15px;
        margin-left: 10px;
    }
    .playListDetail_description{
        position: absolute;
        font-size: 12px;
        height: 36px;
        left: 4%;
        /* 超出部分以点的形式显示 */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /* 行数 */
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .playListDetail_author{
        height: 50px;
    }
    .playListDetail_author div{
        float: left;
    }
    ._authorImg img{
        height: 50px;
        border-radius: 100%;
    }
    .playListDetail_title{
        text-align: left;
        padding-left: 10px;
        font-weight: bold;
    }
    .playListDetail_desc{
        width: 200px;
        height: 128px;
        position: relative;
        margin-left: 140px;
        padding-top: 5px;
    }
    .playListDetail{
        margin-top: 10px;
        padding-left: 10px;
    }
    .playListDetail_img img{
        height: 130px;
    }
    .playListDetail_img{
        float: left;
    }
    .playListTop{
        height: 40px;
    }
    .playListTop ul li:nth-child(3){
        width: 40px;
    }
    .playListTop ul li:nth-child(2){
        width: 240px;
        text-align: left;
        padding-left: 5px;
    }
    .playListTop ul li{
        float: left;
        margin-left: 10px;
        margin-top: 10px;
    }
</style>