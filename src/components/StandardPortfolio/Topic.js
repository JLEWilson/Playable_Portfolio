import React from 'react'
const Topic = ({text, category, click}) => {
  const [isHovering, setIsHovering] = React.useState(false);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const styles = {
    buttonStyles: isHovering => ({
      backgroundColor: isHovering ? "rgba(42,86,51,.9)" : "rgba(42,86,51,.5)",
      border: "none",
      color: "rgba(235, 250, 215, .6)",
      fontSize: "2em",
      padding: ".75em 0",
      borderRadius: "12px"
    }),
  }
  return (
    <React.Fragment>
      <button 
            style={styles.buttonStyles(isHovering)}
            type="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={()=> click(category)}
            >{text}</button>
    </React.Fragment>
  )
}

export default Topic;
