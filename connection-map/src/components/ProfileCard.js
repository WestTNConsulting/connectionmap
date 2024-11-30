// components/ProfileCard.js
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ProfileCard = ({ profile }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{profile.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{profile.company}</Card.Subtitle>
        <Card.Text>{profile.occupation}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Email: {profile.email}</ListGroup.Item>
        <ListGroup.Item>Phone: {profile.phone}</ListGroup.Item>
        <ListGroup.Item>Social Media: {profile.socialMedia}</ListGroup.Item>
        <ListGroup.Item>Recent Activities: {profile.recentActivities}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ProfileCard;
