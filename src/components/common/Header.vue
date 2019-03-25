<template>
  <div>
    <div class="header shadow-2x">
      <div class="container">
        <div class="row flex-fill justify-content-lg-center">
          <div class="col-12 col-lg-9">
            <nav class="navbar navbar-expand-lg px-0 py-2 py-lg-3">
              <!-- brand -->
              <a
                href=""
                class="navbar-brand"
              >
                <img
                  src="static/picture/logo.png"
                  alt="Site - 优秀php程序员的博客上手项目"
                >
              </a>
              <!-- / brand -->
              <!-- Navbar collapse -->
              <div class="collapse navbar-collapse order-2 order-lg-1">
                <ul
                  class="navbar-nav mx-auto main-menu"
                  data-nav
                >
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <router-link to="/">首页</router-link>
                  </li>
                  <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
                    <router-link :to="{name: 'category'}">所有类别</router-link>
                    <ul class="sub-menu">
                      <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <router-link :to="{name: 'category'}">所有</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <router-link :to="{name: 'topic'}">专题</router-link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                      <router-link :to="{name: 'sample'}">示例页面</router-link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <router-link :to="{name: 'detail', params: { userId: 123 }}">详情</router-link>
                  </li>
                </ul>
              </div>
              <div class="nav navbar-menu sign-menu order-1 order-lg-2">
                <a
                  href="javascript:;"
                  v-on:click="openSearch()"
                  class="d-inline-block action-search action-sidebar"
                ><i class="text-lg iconfont icon-search-outline"></i></a>
                <a
                  href="javascript:" v-on:click="openMenu()"
                  class="d-inline-block d-lg-none action-menu pl-4"
                ><i class="text-lg iconfont icon-menu-outline"></i></a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-navbar">
      <div class="mobile-menu p-4 p-md-5">
        <a class="action-menu btn btn-light px-2 mb-4" v-on:click="closeSearch()"><i class="text-lg iconfont icon-close-outline"></i></a>
        <ul class="navbar-nav">
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home"><a href="">首页</a></li>
          <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children"><a href="">生活美学</a>
            <ul class="sub-menu">
              <li class="menu-item menu-item-type-taxonomy menu-item-object-category"><a href="">美妙生活研究所</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="sidebar-collapse">
      <aside class="sidebar p-4 p-md-5">
        <a
          href="javascript:;"
          v-on:click="closeSearch()"
          class="action-search btn btn-light px-2 mb-4"
        ><i class="text-lg iconfont icon-close-outline"></i></a>
        <div class="widget widget-search mb-5">
          <div class="widget-title h6 mb-4">
            <span class="nice-b-line">搜索</span>
            <small class="count">(0)</small>
          </div>
          <div class="widget-content">
            <div class="search-input form-group mb-4">
              <input
                type="text"
                placeholder="请输入搜索关键词"
                class="form-control"
                value=""
              >
              <button
                class="btn"
                type="button"
              ><i class="iconfont icon-search-outline"></i></button>
            </div>

            <div class="search-result">
              <ul></ul>
              <div
                class="loadmore text-sm mt-3"
                style="display: none"
              ><a
                  href="#"
                  class="text-muted"
                >加载更多...</a></div>
            </div>
          </div>
        </div>
        <div
          id="recent-posts-2"
          class="widget widget_recent_entries mb-5"
        >
          <div class="widget-title h6 mb-4"><span class="nice-b-line">近期文章</span></div>
          <ul>
            <li>
              <a href="">佛山街上的深夜食堂，都市夜归人的灵魂居所——夜访佛山街上胜町炭火铁板居酒屋</a>
              <span class="post-date">2018年12月28日</span>
            </li>
          </ul>
        </div>
        <div
          id="media_image-2"
          class="widget widget_media_image mb-5"
        >
          <a href="">
            <img
              width="750"
              height="150"
              src="static/picture/adv-750-150.png"
              class="image attachment-full size-full"
              alt=""
              style="max-width: 100%; height: auto;"
            />
          </a>
        </div>
        <div
          id="tag_cloud-2"
          class="widget widget_tag_cloud mb-5"
        >
          <div class="widget-title h6 mb-4"><span class="nice-b-line">标签</span></div>
          <div class="tagcloud">
            <a
              href=""
              class="tag-cloud-link"
            >三亚</a>
            <a
              href=""
              class="tag-cloud-link"
            >三亚</a>
            <a
              href=""
              class="tag-cloud-link"
            >三亚</a>
            <a
              href=""
              class="tag-cloud-link"
            >三亚</a>
            <a
              href=""
              class="tag-cloud-link"
            >三亚</a>
          </div>
        </div>
      </aside>
    </div>
    <div
      class="bg-overlay"
      v-on:click="closeSearch()"
    ></div>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    // 打开搜索
    openSearch: function() {
      $(".sidebar-collapse").toggleClass("active");
      $("body").toggleClass("active-sidebar");
    },

    closeSearch: function() {
      $(".mobile-navbar").removeClass("active");
      $(".sidebar-collapse").removeClass("active");
      $("body")
        .removeClass("active-sidebar")
        .removeClass("active");
    },

    openMenu: function() {
      $(".mobile-navbar").toggleClass("active");
      $("body").toggleClass("active");
    }
  }
};
</script>
