import NextHead from "next/head";
import PropTypes from 'prop-types'

function Head({title}) {
  return (
    <NextHead>
      <title>
        {title}
      </title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content=""
        />
        <meta name="theme-color" content="red" />
        <meta property="og:url" content="https://klutch.com.br/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/alura-cursos/01-nextjs-course/aula2.5/public/images/alura-cases.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
    </NextHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head