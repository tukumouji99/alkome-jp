// components/work/Work.ts
// TODO: 一覧ページの内容をクラスの配列で管理するようにし、このファイルに記録する。
import { ref, Ref } from 'vue';

export default function useWork(): { work: Ref<{ text: string }> } {
  const work = ref({
    text: 'This is the Work page.',
  });

  return {
    work,
  };
}
