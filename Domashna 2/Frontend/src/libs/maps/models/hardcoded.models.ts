import { Place } from './map.models';

const locations: Place[] = [
  new Place(
    1,
    'Куршумли-ан',
    'Cкoпje',
    42.0032939,
    21.4367598,
    false,
    null,
    'Mo-Sa 10:00-15:00; Su 09:00-13:00',
    null,
    null
  ),
  new Place(
    2,
    'Музеј на Македонија',
    'Cкoпje',
    42.003194,
    21.4363088,
    true,
    null,
    'Tu-Sa 10:00-15:00; Su 09:00-13:01',
    null,
    null
  ),
  new Place(
    3,
    'Музеј на современата уметност',
    'Cкoпje',
    42.0043142,
    21.4325172,
    true,
    'msu-info@msuskopje.org.mk',
    'Tu-Sa 10:00-15:00; Su 09:00-13:02',
    '+389 2 3117734',
    null
  ),
  new Place(
    4,
    'Магаза',
    'Битола',
    41.0299956,
    21.3350427,
    false,
    null,
    'Tu-Sa 10:00-15:00; Su 09:00-13:03',
    null,
    null
  ),
];

export default locations;
