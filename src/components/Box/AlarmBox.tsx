import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { checkNotificationHistory } from "api/notification/NotificationHistory";

interface NotificationItemProps {
  $read: boolean;
}

const AlarmBoxContainer = styled.div`
  width: 20%;
  height: 370px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 130px;
  z-index: 10;
  padding: 20px;
  overflow-y: auto;

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
`;

const EmptyAlarm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 140px;
`;

const NotificationItem = styled.div<NotificationItemProps>`
  width: 92%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px ${(props) => (props.$read ? "rgba(0, 0, 0, 0.15);" : "rgba(0, 0, 0, 0.25)")};
`;

const NotificationContent = styled.div<NotificationItemProps>`
  font-size: 14px;
  color: ${(props) => (props.$read ? "#bfbfbf" : "#202020")};
`;

const NotificationTimestamp = styled.div<NotificationItemProps>`
  font-size: 12px;
  color: ${(props) => (props.$read ? "#bfbfbf" : "#202020")};
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

  const parseDate = (dateString: string) => {
    const date = new Date(dateString);

    // Date 객체에서 월과 일을 추출
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
    const day = date.getDate();

    return `${month}월 ${day}일`;
  };

  return (
    <AlarmBoxContainer>
      <Title>알림</Title>
      <AlarmContainer>
        {notifications.length === 0 ? (
          <EmptyAlarm>새로운 알림이 없습니다.</EmptyAlarm>
        ) : (
          notifications.map((notification, index) => (
            <NotificationItem key={index} $read={notification.read}>
              <NotificationContent $read={notification.read}>{notification.content}</NotificationContent>
              <NotificationTimestamp $read={notification.read}>{parseDate(notification.createdAt)}</NotificationTimestamp>
            </NotificationItem>
          ))
        )}
      </AlarmContainer>
    </AlarmBoxContainer>
  );
};

export default AlarmBox;
