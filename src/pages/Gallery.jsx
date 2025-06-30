import Collections from './home/Collections'

const Gallery = () => {
    return (
        <div className='px-6 pt-6 overflow-hidden text-center pb-12 bg-[var(--color-bg)]'>
            <h1 className="font-extrabold text-5xl mb-6">Galeria Completa</h1>
            <p className='text-[var(--color-4)]'>Explore nossa coleção completa de veículos esportivos premium. Cada modelo é uma obra-prima da engenharia automobilística.</p>
            <Collections showFilterButtons previewGallery />
        </div>
    )

}

export default Gallery
