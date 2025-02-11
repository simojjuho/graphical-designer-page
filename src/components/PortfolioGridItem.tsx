interface PortfolioGridItemProps {
  name: string
  pictureUri: string
}

const PortfolioGridItem = ({ name, pictureUri }: PortfolioGridItemProps) => {
  const GridItemStyle = `bg-[${pictureUri}]`
  return (
    <div className={GridItemStyle}>
      <p>{name}</p>
    </div>
  )
}

export default PortfolioGridItem
