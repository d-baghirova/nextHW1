import React from 'react'

interface Props {
  slug: string[]
}

export default function EventsDetails ({slug}: Props) {
    if (Number(slug[2]) >= 2023){
        return (
          <div>
            <h1>Not best event we organised</h1>
          </div>
        )
    }
    return (
      <div>
        <h1>Best events we organised</h1>
      </div>
    )
}


export function getServerSideProps(context: any) {
    return {
      props: {
        slug: context.params.slug,
      }
    }
  }