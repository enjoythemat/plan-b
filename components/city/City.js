import Heading from '../Heading'
import { Placemark, YMaps, Map } from 'react-yandex-maps'
import styles from '../../styles/city/City.module.scss'

const City = () => (
  <>
    <Heading
      title="Мы на карте"
      subTitle="Проложите путь, либо просто позвоните нам"
    />

    <div className={styles.mapWrapper}>
      <YMaps>
        <Map
          className={styles.map}
          defaultState={{
            center: [57.96, 56.26],
            zoom: 11,
            controls: ['zoomControl', 'fullscreenControl']
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark defaultGeometry={[57.96, 56.26]} />
        </Map>
      </YMaps>
    </div>
  </>
)

export default City
