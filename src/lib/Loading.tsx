export default function Loading() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='text-primary-darken size-32 animate-spin'
        viewBox='0 0 24 24'>
        <path
          fill='currentColor'
          d='M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8'
        />
      </svg>
    </div>
  )
}
