import StoryBook from '../StoryBook'
import PlayGround from '../PlayGround'
import './index.css'
import { useState, useEffect } from 'react'
import Configurations from '../../utils/Configurations'
import FluxRequests from '../../utils/Requests/Flux'
import { fromFlux } from '@influxdata/giraffe'

function Demo() {
    const [selected, setSelected] = useState(0)
    const [data, setData] = useState(null)

    const fetchData = async (i)=> {
        const config = Configurations.get()[i]
        const data = await new FluxRequests().query(config.getQuery())

        setData(data)
    }

    useEffect(() => {
        fetchData(selected)
    }, [selected])

    const getConfigs = () => {
        return Configurations.get().map((c, i) => {
            return {
                id: i,
                title: c.getTitle(),
                selected: i === selected,
                onClick: () => {
                    setSelected(i)
                }
            }
        })
    }
    
    const getConfig = () => {
        return Configurations.get()[selected]
    }

    return (
        <div className='Demo'>
            <StoryBook index={getConfigs()} />

            <div className='PlayGround'>
            {
                data && <PlayGround config={getConfig()} table={data} />
            }
            </div>
        </div>
    )
}

export default Demo
