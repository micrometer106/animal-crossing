import DefaultLayout from '../../components/layouts/default'

const FishPage = () => {
  let request = new XMLHttpRequest()
  request.open('GET', 'https://acnhapi.com/v1/fish/')
  request.onload = function() {
    console.log("load success")
    let data = JSON.parse(this.response)
    console.log(data.bitterling)
    console.log(Object.keys(data))
    Object.keys(data).forEach(fishName => {
      console.log(fishName)
      if (fishName == "bitterling") {
        console.log(data[fishName])
        console.log()
      }
    })
    // data.forEach(fish => {
    //   console.log(fish)
    // })
  }
  request.send()

  return (
    <h1>Fish</h1>
  )
};

FishPage.Layout = DefaultLayout;

export default FishPage;