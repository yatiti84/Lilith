import React from 'react'
import styled from 'styled-components'
import { DraftEntityInstance } from 'draft-js'
import { defaultMarginTop, defaultMarginBottom } from '../shared-style'
const Video = styled.video`
  width: 100%;
  ${defaultMarginTop}
  ${defaultMarginBottom}
`

type ImageEntity = {
  id: string
  name?: string
  imageFile: {
    url: string
  }
  resized: {
    original: string
    w480: string
    w800: string
    w1200: string
    w1600: string
    w2400: string
  }
}

type VideoEntity = {
  id: string
  name?: string
  urlOriginal: string
  youtubeUrl?: string
  file: {
    filename?: string
    filesize: number
    url: string
  }
  heroImage: ImageEntity
}

export function VideoBlock(entity: DraftEntityInstance) {
  const { video }: { video: VideoEntity } = entity.getData()

  return (
    <Video muted autoPlay loop controls>
      <source src={video?.urlOriginal} />
      <source src={video?.file?.url} />
    </Video>
  )
}
