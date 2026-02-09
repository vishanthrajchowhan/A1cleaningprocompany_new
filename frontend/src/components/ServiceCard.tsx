interface ServiceCardProps {
  name: string
  description: string
  icon: string
}

export default function ServiceCard({ name, description, icon }: ServiceCardProps) {
  const iconMap: { [key: string]: string } = {
    office: '🏢',
    commercial: '🏪',
    deep: '✨',
    moving: '📦'
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-4">{iconMap[icon] || '🧹'}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
