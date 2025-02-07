interface ServiceCardProps {
  imagePath: string
  cardText: string
  imageAltText?: string

}

const ServiceCard = ({imagePath, cardText, imageAltText}: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-5 items-center group">
      <img 
        className="h-36 max-w-36"
        src={imagePath}
        alt={imageAltText} />
      <p 
        className="text-center text-[#AAAAAA] transition-colors duration-500 group-hover:text-amber-200"
      >
        {cardText}
      </p>
    </div>
  )
}

export default ServiceCard
