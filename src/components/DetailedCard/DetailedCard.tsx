import Loader from '../Loader';
import { planetsApi } from '../../store/planetsApi';
import { getTestAttrs } from '../../../tests/getTestAttrs';
import React from 'react';
import Link from 'next/link';

interface IProps {
  id: string;
}

const DetailedCard: React.FC<IProps> = ({ id }) => {
  const { data, isFetching } = planetsApi.useGetPlanetQuery({ id });

  if (isFetching)
    return (
      <div className="item">
        <Loader />
      </div>
    );

  if (!data) return null;

  return (
    <div {...getTestAttrs({ id: 'detailed-card' })} className="item">
      <p>name: {data?.name}</p>
      <p>orbital period: {data?.orbital_period}</p>
      <p>population: {data?.population}</p>
      <p>rotation_period: {data?.rotation_period}</p>
      <p>diameter: {data?.diameter}</p>
      <p>climate: {data?.climate}</p>
      <p>gravity: {data?.gravity}</p>
      <p>terrain: {data?.terrain}</p>
      <p>surface_water: {data?.surface_water}</p>
      <Link href="/" className="button_close_open">
        close detailed card
      </Link>
    </div>
  );
};

export default DetailedCard;
