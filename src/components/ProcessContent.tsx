import React from "react";

interface ContentItem {
  step: string;
  content: string;
}

interface ContentProps {
  stepKey: string;
}

// 주식 투자 과정 설명 (내용은 추후에 수정)
const contentData = {
  one: [
    { step: "1. 증권사 선택", content: "주식거래를 위해서는 가장 먼저 어떤 증권사를 통해 거래할 것인지 결정 해야 합니다." },
    { step: "2. 주식 계좌 개설 방법 선택", content: "주식거래를 위해서는 가장 먼저 어떤 증권사를 통해 거래할 것인지 결정 해야 합니다." },
    { step: "3. 주식 계좌 개설 및 주식 프로그램 설치", content: "주식거래를 위해서는 가장 먼저 어떤 증권사를 통해 거래할 것인지 결정 해야 합니다." },
  ],
  two: [
    { step: "1. STEP 2", content: "STEP 2. 원하는 종목 찾기에 들어갈 내용입니다." },
    { step: "2. STEP 2", content: "STEP 2. 원하는 종목 찾기에 들어갈 내용입니다." },
    { step: "3. STEP 2", content: "STEP 2. 원하는 종목 찾기에 들어갈 내용입니다." },
  ],
  three: [
    { step: "1. STEP 3", content: "STEP 3. 분석하기에 들어갈 내용입니다." },
    { step: "2. STEP 3", content: "STEP 3. 분석하기에 들어갈 내용입니다." },
    { step: "3. STEP 3", content: "STEP 3. 분석하기에 들어갈 내용입니다." },
  ],
  four: [
    { step: "1. STEP 4", content: "STEP 4. 동일 업종 비교하기에 들어갈 내용입니다." },
    { step: "2. STEP 4", content: "STEP 4. 동일 업종 비교하기에 들어갈 내용입니다." },
    { step: "3. STEP 4", content: "STEP 4. 동일 업종 비교하기에 들어갈 내용입니다." },
  ],
  five: [
    { step: "1. STEP 5", content: "STEP 5. 비교하기에 들어갈 내용입니다. " },
    { step: "2. STEP 5", content: "STEP 5. 비교하기에 들어갈 내용입니다. " },
    { step: "3. STEP 5", content: "STEP 5. 비교하기에 들어갈 내용입니다. " },
  ],
  six: [
    { step: "1. STEP 6", content: "STEP 6. 동향 및 뉴스 분석하기에 들어갈 내용입니다." },
    { step: "2. STEP 6", content: "STEP 6. 동향 및 뉴스 분석하기에 들어갈 내용입니다." },
    { step: "3. STEP 6", content: "STEP 6. 동향 및 뉴스 분석하기에 들어갈 내용입니다." },
  ],
  seven: [
    { step: "1. STEP 7", content: "STEP 7. 매도하기에 들어갈 내용입니다. " },
    { step: "2. STEP 7", content: "STEP 7. 매도하기에 들어갈 내용입니다. " },
    { step: "3. STEP 7", content: "STEP 7. 매도하기에 들어갈 내용입니다. " },
  ],
};

const ProcessContent: React.FC<ContentProps> = ({ stepKey }) => {
  const stepData: ContentItem[] = contentData[stepKey as keyof typeof contentData];

  return (
    <div>
      {stepData.map((data, index) => (
        <div key={index}>
          <h3>{data.step}</h3>
          <p>{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessContent;
