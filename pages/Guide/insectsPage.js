import Link from 'next/Link'
import DefaultLayout from '../../components/layouts/default'

const InsectsPage = () => {
  let request = new XMLHttpRequest()
  request.open('GET', 'https://ghibliapi.herokuapp.com/films')
  request.onload = function() {
    let data = JSON.parse(this.response)
    data.forEach(movie => {
      console.log(movie.title)
    })
  }
  request.send()

  return (
    <h1>Insects</h1>
  )
};

InsectsPage.Layout = DefaultLayout;

export default InsectsPage;