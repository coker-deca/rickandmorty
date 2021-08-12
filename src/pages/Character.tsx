import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchHttpResponse } from '../utils/api';
import { Container } from './style';

const Character: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("surl", id);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const baseUrl = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    fetchHttpResponse(`${baseUrl}${id}`, {})
      .then((result) => {
        console.log(result);
        setData(result.data);
        result.status = 200;
      })
      .catch((err) => setError(err));
  }, [id]);

  return (
    <>
      {!error && data && (
        <Container>
          <main>
            <h1 className="title">{data.name}</h1>
            <div className="profile">
              <div className="profile-image">
                <img src={data.image} alt={data.name} />
              </div>
              <div className="profile-details">
                <h2>Character Details</h2>
                <ul>
                  <li>
                    <strong>Name:</strong> {data.name}
                  </li>
                  <li>
                    <strong>Status:</strong> {data.status}
                  </li>
                  <li>
                    <strong>Gender:</strong> {data.gender}
                  </li>
                  <li>
                    <strong>Species:</strong> {data.species}
                  </li>
                  <li>
                    <strong>Location:</strong> {data.location?.name}
                  </li>
                  <li>
                    <strong>Originally From:</strong> {data.origin?.name}
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </Container>
      )}
      {!data && <div>Not Found</div>}
    </>
  );
};

export default Character;
