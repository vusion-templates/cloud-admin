// Import TinyMCE
import 'tinymce/tinymce';

// A theme is also required
import 'tinymce/themes/silver';
import 'tinymce/skins/ui/oxide/skin.css';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/print';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/table';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/help';
import 'tinymce/plugins/wordcount';
import contentStyle from '!!raw-loader!tinymce/skins/ui/oxide/content.css';
import contentStyle2 from '!!raw-loader!tinymce/skins/content/default/content.css';
import Editor from '@tinymce/tinymce-vue';
export default {
    extends: Editor,
    props: {
        init: {
            type: Object,
            default() {
                return {
                    skin: false,
                    content_css: false,
                    content_style: contentStyle.toString() + '\n' + contentStyle2.toString(),
                };
            },
        },
    },
};
