import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AppHeader from '../../components/AppHeader/AppHeader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfo } from './infoSlice'
import { Grid } from '@material-ui/core'
import InfoCard from './components/InfoCard/InfoCard'

const InfoList = props => {
  const dispatch = useDispatch();
  const infos = useSelector(state => state.infos.infos)
  console.log(infos)
  useEffect(() => {
   dispatch(fetchInfo());
  }, [dispatch]);

  
  return (
    <div>
      <AppHeader />
      <Grid container >
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8} >
          <Grid container spacing={2}>
          {infos.map(info => (
            <Grid key={info.id} item sm={4} md={3}>
              <InfoCard info={info} />
            </Grid>
          ))}
          </Grid>
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </div>
  )
}

InfoList.propTypes = {

}

export default InfoList
