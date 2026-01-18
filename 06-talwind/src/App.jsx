import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Snowfall from 'react-snowfall'

const App = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* <Snowfall color="red" snowflakeCount={200}style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
        }}
      /> */}
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App
