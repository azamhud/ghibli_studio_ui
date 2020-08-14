<template>
  <div>
    <div class="minibox__header" @click="expand = !expand">
      {{headerValue}}
      <div class="toogle">
        <span v-if="!expand">+</span>
        <span v-else>-</span>
      </div>
    </div>
    <div v-if="expand" class="minibox__body">
      <span v-if="dataParent.length === 0">No Data Available</span>
      <ul>
        <li v-for="(item, key) in dataParent" :key="key">
          {{ item[itemValue] }}
          <svg
            class="ml-2"
            style="cursor: pointer"
            @click="goTo(item)"
            width="15"
            height="15"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.1352 23.7248L27.9928 0.587221C28.0258 0.395139 27.9434 0.203058 27.7843 0.0932967C27.6965 0.0329283 27.5977 0 27.4935 0C27.4057 0 27.3234 0.0219522 27.2411 0.0658565L0.254199 15.4927C0.0840906 15.5915 -0.014682 15.7836 0.00178013 15.9812C0.0237296 16.1788 0.155426 16.3489 0.341997 16.4093L8.4633 19.1149L11.5911 27.6707C11.6624 27.8683 11.8545 28 12.063 28C12.085 28 12.1014 28 12.1179 27.9945C12.2441 27.978 12.3648 27.9122 12.4526 27.8024L12.5404 27.6927L12.5459 27.6982L17.0894 21.9851L23.4712 24.1145C23.6084 24.1584 23.7676 24.1419 23.8883 24.0706C24.0255 23.9992 24.1133 23.8675 24.1352 23.7248ZM1.73579 15.8056L24.3273 2.89769L8.72669 18.138L1.73579 15.8056ZM12.4746 20.0259L11.8271 25.3548L9.44553 18.8459L22.0774 6.50333L22.286 6.68444L12.5733 19.7844C12.5185 19.8557 12.4855 19.9381 12.4746 20.0259ZM12.7873 25.7883L13.4019 20.7613L16.0798 21.6558L12.7873 25.7883ZM23.2408 22.9784L13.797 19.8283L26.6539 2.48608L23.2408 22.9784Z"
              fill="blue"
            />
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "ExpandList",
    props:{
        dataParent:{
            type: Array,
            required: true
        },
        headerValue: {
            type: String,
            required: true
        },
        itemValue: {
            type: String,
            required: true
        },
        path:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            expand: false
        }
    },
    methods:{
goTo(item) {
      this.$router.push({ path: `/${this.path}/${item.id}` });
    },
    }
}
</script>

<style lang="scss" scoped>

</style>