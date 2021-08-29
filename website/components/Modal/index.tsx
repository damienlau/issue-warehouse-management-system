import { defineComponent } from "vue";
import { Modal } from "ant-design-vue";

export interface ModalProps {
  visible?: boolean;
  title?: string;
  size?: string;
}

export default defineComponent({
  name: "Modal",
  emits: ["update:visible"],
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: "light",
      // validator(size: string) {
      //   return ["ultralight", "lighter", "light", "heavy", "bold"].includes(
      //     size
      //   );
      // },
    },
  },
  setup(props, { slots, emit }) {
    const handleCancel = () => {
      emit("update:visible", !props.visible);
    };

    return () => (
      <Modal
        centered
        closable={false}
        footer={null}
        visible={props.visible}
        onCancel={handleCancel}
      ></Modal>
    );
  },
});
