import React, { useState } from 'react';
import { SimpleGrid, Card, CardHeader, CardBody, Heading, Text } from '@chakra-ui/react';
import './age.css';

function AgeCard({ title, content }) {
    return (
      <Card>
        <CardHeader>
          <Heading size='sm'>{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{content}</Text>
        </CardBody>
      </Card>
    );
  }
  

function Age() {
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    if (!age || isNaN(age)) {
      setResult(<span className='text validAge'>Please enter a valid age.</span>);
      return;
    }
    const maxHeartRate = 220 - parseInt(age);
    const sixtyFourPercent = Math.round(maxHeartRate * 0.64);
    const seventySixPercent = Math.round(maxHeartRate * 0.76);
    const seventySevenPercent = Math.round(maxHeartRate * 0.77);
    const ninetyThreePercent = Math.round(maxHeartRate * 0.93);

    setResult(
      <SimpleGrid spacing={2} columns={3}>
        <AgeCard title="Your max heart rate" content={maxHeartRate} />
        <AgeCard title="Moderate-intensity target heart rate" content={`${sixtyFourPercent} - ${seventySixPercent} bpm`} />
        <AgeCard title="Vigorous-intensity target heart rate" content={`${seventySevenPercent} - ${ninetyThreePercent} bpm`} />
      </SimpleGrid>
    );
  };

  return (
    <div className="age-calculator">
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        placeholder="Enter your age" 
      />
      <button onClick={calculate} className="button-85">Calculate</button>
      <div className='cardplace'>{result}</div>
    </div>
  );
  
}

export default Age;
