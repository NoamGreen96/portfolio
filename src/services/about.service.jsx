export function AboutP() {
  const aboutContent = `Hello there! 😊
    I'm Noam Green, 
    A 26-year-old passionate Frontend | Full Stack Web Developer from Kiryat Ata - Israel. 🚀 
    My expertise spans across a range of cutting-edge technologies, including React.js, Redux, Node.js, and MongoDB. 🔧 
    With a focus on targeted solutions, I excel at managing states with Redux and crafting intuitive user interfaces using the latest technologies. 💻 
    Looking forward to connecting with you! 🌟`;

  const formattedContent = aboutContent.replace(/\n\s+/g, "<br/>");
  return <p dangerouslySetInnerHTML={{ __html: formattedContent }} />;
}
