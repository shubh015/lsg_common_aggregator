'use client'

import NextImage from 'next/image'

// import Skeleton from '../Skeleton'

import { ImageElementProps } from './interface'
// import { useThemeToggle } from '@/hooks/useThemeToggle'

// import useToggle from 'hooks/useToggle'

const Image: React.FC<ImageElementProps> = ({
  width,
  height,
  className = '',
  alt,
  src,
  isLoading = false,
  onClick,
  style,
  ImageclassName = '',
  // imageLoading = true,
}) => {
  // const [isLoaded, turnOn] = useThemeToggle()
  const classNames = [`relative flex h-full w-full justify-center `, className].join(' ')

  return (
    <div className="h-full w-full">
      {src !== 'null' ? (
        <div className="flex h-full w-full items-center justify-center">
          {isLoading ? (
            <div className="h-full w-full">{/* <Skeleton isAnimatePulse className="h-full w-full" /> */}</div>
          ) : (
            <div className={classNames}>
              {
                <NextImage
                  alt={alt}
                  className={ImageclassName}
                  draggable="false"
                  height={height}
                  src={typeof src === 'string' && src.includes('http') ? src : typeof src === 'object' ? src : ''}
                  style={style}
                  width={width}
                  onClick={onClick}
                  // onError={turnOn}
                  // onLoadingComplete={turnOn}
                />
              }

            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Image
