<template>
	<div class="tool-bar-ri">
		<div class="header-icon">
			<!-- 搜索菜单 -->
			<SearchMenu id="searchMenu" />
			<!-- 主题设置 -->
			<ThemeSetting id="themeSetting" />
			<!-- 消息 -->
			<Message id="message" />
			<!-- 全屏切换 -->
			<div class="fullscreen">
				<i :class="['iconfont', isFullscreen ? 'icon-suoxiao' : 'icon-fangda']" 
				class="toolBar-icon" 
				@click="toggle"></i>
			</div>
		</div>
		<span class="username">Geeker</span>
		<Avatar />
	</div>
</template>

<script setup lang="ts">
import SearchMenu from "./components/SearchMenu.vue";
import Message from "./components/Message.vue";
import ThemeSetting from "./components/ThemeSetting.vue";
import Avatar from "./components/Avatar.vue";

// 全屏切换
import { useFullscreen } from "@vueuse/core";
const { toggle, isFullscreen } = useFullscreen();

</script>

<style scoped lang="scss">
.tool-bar-ri {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 30px 0 0;
	.header-icon {
		display: flex;
		align-items: center;
		& > * {
			margin-left: 21px;
		}
	}
	.username {
		margin: 0 20px;
		font-size: 15px;
	}
}
</style>
