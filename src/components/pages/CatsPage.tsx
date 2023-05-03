import CatList from '../cats/CatList'

const CatsPage = () => {
  return (
    <>
      <div className={'row'}>
        <div className={'col'}>
          <h1>Mis Gatos</h1>
          <CatList />
        </div>
      </div>
    </>
  )
}

export default CatsPage
