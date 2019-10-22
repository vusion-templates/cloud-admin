<template>
    <div>
        <u-page-sum>
            <u-link href="https://github.com/tinymce/tinymce">Tinymce 富文本编辑器</u-link>
        </u-page-sum>
        <u-loading v-show="!libLoad.status"></u-loading>
        <div v-show="libLoad.status">
            <u-tinymce :class="$style.container" v-model="content" v-bind="options"></u-tinymce>
        </div>
    </div>
</template>
<script>
const libLoad = {
    status: false,
};
export default {
    components: {
        'u-tinymce': () => import(/* webpackChunkName: "tinymce" */ '../components/u-tinymce').then((component) => {
            libLoad.status = true;
            return component;
        }),
    },
    data() {
        const img = require('../assets/images/logo.png');
        return {
            content:
                `
  <p style="text-align: center;">
    <img title="Logo" src="${img}" alt="Logo" width="200" height="199" />
  </p>

  <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>

  <h2>Got questions or need help?</h2>

  <ul>
    <li>Our <a href="https://www.tiny.cloud/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
    <li>Have a specific question? Visit the <a href="https://community.tiny.cloud/forum/" target="_blank">Community Forum</a>.</li>
    <li>We also offer enterprise grade support as part of <a href="https://www.tiny.cloud/pricing">TinyMCE Enterprise</a>.</li>
  </ul>

  <h2>A simple table to play with</h2>

  <table style="text-align: center;">
    <thead>
      <tr>
        <th>Product</th>
        <th>Cost</th>
        <th>Really?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TinyMCE</td>
        <td>Free</td>
        <td>YES!</td>
      </tr>
      <tr>
        <td>Plupload</td>
        <td>Free</td>
        <td>YES!</td>
      </tr>
    </tbody>
  </table>

  <h2>Found a bug?</h2>

  <p>
    If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.
  </p>

  <h2>Finally ...</h2>

  <p>
    Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.
  </p>
  <p>
    Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.
  </p>


`,
            options: {
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
            },
            libLoad,
        };
    },
    methods: {

    },
};
</script>
<style module>
.container {
    position: relative;
    height: 600px;
}
</style>
