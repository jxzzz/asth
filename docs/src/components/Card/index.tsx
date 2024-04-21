import { Card } from '../../../../packages';

const CardDoc = () => {
  return (
    <>
      <Card title="Card">
        <div className="ice-font-sans">
          <p>这是 Sans 字体族的示例文本。</p>
          <p>在设计中，Sans 字体族通常用于其简洁和现代感。</p>
          <p>它适用于大多数文本内容，例如段落文字、按钮标签等。</p>
        </div>

        <div className="ice-font-mono">
          <p>这是 Mono 字体族的示例文本。</p>
          <p>Mono 字体族通常用于代码示例和等宽排列的文本。</p>
          <p>它在显示代码块和命令行输出时特别有用。</p>
        </div>
      </Card>
    </>
  );
};

export default CardDoc;
