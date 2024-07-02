import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { checkNotificationHistory } from "api/notification/NotificationHistory";

const AlarmBoxContainer = styled.div`
  width: 20%;
  height: 370px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 130px;
  z-index: 10;
  padding: 20px;

  @media (max-width: 900px) {
    width: 200px;
    height: 350px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 14px;
  font-family: Pretendard-Bold;
  margin-bottom: 20px;
`;

const AlarmContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const EmptyAlarm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 140px;
`;

const NotificationItem = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const NotificationContent = styled.div`
  font-size: 14px;
`;

const NotificationTimestamp = styled.div`
  font-size: 12px;
  color: #777;
`;

const AlarmBox: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    {
      const fetchedNotifications = await checkNotificationHistory();
      if (fetchedNotifications) {
        setNotifications(fetchedNotifications);
      }
    }
  };

  return (
    <AlarmBoxContainer>
      <Title>알림</Title>
      <AlarmContainer>
        {notifications.length === 0 ? (
          <EmptyAlarm>새로운 알림이 없습니다.</EmptyAlarm>
        ) : (
          notifications.map((notification, index) => (
            <NotificationItem key={index}>
              <NotificationContent>{notification.content}</NotificationContent>
              <NotificationTimestamp>{notification.createdAt}</NotificationTimestamp>
            </NotificationItem>
          ))
        )}
      </AlarmContainer>
    </AlarmBoxContainer>
  );
};

export default AlarmBox;
