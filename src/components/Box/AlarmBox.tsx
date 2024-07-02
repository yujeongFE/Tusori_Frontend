import React, { useEffect, useState } from "react";
import styled from "styled-components";
import checkNotificationHistory from "api/notification/NotificationHistory";

const AlarmBoxContainer = styled.div`
  width: 20%;
  height: 370px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 130px;
  z-index: 10;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    width: 200px;
    height: 350px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Pretendard-Bold;
  margin-bottom: 10px;
`;

const AlarmContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const NotificationItem = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const AlarmBox: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const fetchedNotifications = await checkNotificationHistory();
    if (fetchedNotifications) {
      setNotifications(fetchedNotifications);
    }
  };

  return (
    <AlarmBoxContainer>
      <Title>알림</Title>
      <AlarmContainer>
        {notifications.length === 0 ? (
          <AlarmContainer>새로운 알림이 없습니다.</AlarmContainer>
        ) : (
          notifications.map((notification, index) => (
            <NotificationItem key={index}>
              <div>{notification.content}</div>
              <div>{notification.createdAt}</div>
            </NotificationItem>
          ))
        )}
      </AlarmContainer>
    </AlarmBoxContainer>
  );
};

export default AlarmBox;
