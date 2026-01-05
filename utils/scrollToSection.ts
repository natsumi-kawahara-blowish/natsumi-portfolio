/**
 * スムーズスクロールで指定されたセクションに移動する
 * @param sectionId - 移動先のセクションID（#を含むまたは含まない）
 */
export const scrollToSection = (sectionId: string): void => {
  // #が含まれていない場合は追加
  const id = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
  const element = document.querySelector(id);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * getElementByIdを使用したスムーズスクロール
 * @param sectionId - 移動先のセクションID（#を含まない）
 */
export const scrollToSectionById = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

