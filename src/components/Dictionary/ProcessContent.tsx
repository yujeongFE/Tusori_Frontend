import { Fragment } from "react";
import React from "react";
import styled from "styled-components";

interface ContentItem {
  step: string;
  content: string;
}

interface ContentProps {
  stepKey: string;
}

const contentData = {
  one: [
    {
      step: "1. 증권사 또는 금융기관 선택",
      content:
        "증권사 또는 금융기관 선택 투자를 위한 계죄를 개설할 증권사나 은행을 선택합니다. \n이때 수수료, 거래 플랫폼의 편의성, 금융 서비스 등을 고려할 수 있습니다.",
    },
    { step: "2. 개인정보 제출", content: "개인정보를 제출합니다." },
    { step: "3. 계좌 유형 선택", content: "계좌 유형 선택 투자 목적과 성향에 따라 일반 증권계좌 또는 특수 계좌 중 하나를 선택합니다." },
    { step: "4. 계약서 작성 및 서명", content: "계약서 작성 후 서명합니다." },
    { step: "5. 계좌 개설 확인 및 인증", content: "계좌가 개설되었는지 확인 후 인증합니다." },
  ],
  two: [
    {
      step: "1. 투자 목표 설정",
      content:
        " 투자 목적과 성향에 따라 투자 대상을 결정합니다. \n 예를 들어 장기 투자를 원하는 경우 안정적이고 성장 가능성이 높은 기업을 선정하고, 단기 투자를 원하는 경우 안정성보다는 높은 수익을 얻을 수 있는 기업을 선정합니다.",
    },
    {
      step: "2. 주식 스크리닝",
      content:
        "주식 거래 플랫폼을 통해 원하는 조건에 맞는 주식을 검색하고 선별합니다. 이때 매출액, 순이익, 주가 수익률, 산업 부분 등의 다양한 기준을 활용할 수 있습니다.",
    },
  ],
  three: [
    { step: "1. 재무제표 분석", content: "기업의 재무제표 분석하여 수익성, 안정성, 성장성을 확인하고, 손익계산서, 재무상태표, 현금흐름표 등을 분석합니다. " },
    { step: "2. 경쟁사 분석", content: "선정한 기업의 주요 경쟁사와 비교하여 시장 점유율, 제품 및 서비스, 기술력 등을 분석합니다." },
    { step: "3. 산업 분석", content: "투자 대상 기업이 속한 산업의 동향과 성장 가능성을 분석합니다. 이때 시장 규모, 경쟁 구도, 기술 발전 등을 고려합니다. " },
  ],
  four: [
    { step: "1. 동일 업종 기업 선정", content: "투자 대상 기업과 유사한 업종에 속하는 다른 기업들을 선정합니다. " },
    { step: "2. 재무 비교 분석", content: "선정한 기업들의 재무제표를 비교하여 강점과 약점을 파악합니다. " },
    { step: "3. 주가 비교 분석", content: "주가 및 주가 수익률, 주가 대 주가수익비율 등을 비교를 통해 상대적인 가치를 평가합니다." },
  ],
  five: [{ step: "", content: "" }],
  six: [
    { step: "1. 시장 동향 분석", content: "주가 지수, 섹터별 성과, 시장 심리 등의 분석을 톡해 주식 시장의 전반적인 동향을 파악합니다. " },
    {
      step: "2. 뉴스 및 이벤트 분석",
      content: "기업과 산업에 영향을 줄 수 있는 뉴스나 이벤트를 확인합니다. 이익 발표, 인수합병, 정책 변화 등의 이슈를 고려하면 좋습니다. ",
    },
  ],
  seven: [{ step: "", content: "" }],
};

const ProcessContent: React.FC<ContentProps> = ({ stepKey }) => {
  const stepData: ContentItem[] = contentData[stepKey as keyof typeof contentData];

  return (
    <div>
      {stepData.map((data, index) => (
        <div key={index}>
          <StepText>{data.step}</StepText>
          <ContentText>
            {data.content.split("\n").map((line, index) => (
              <Fragment key={index}>
                {line}
                <br />
              </Fragment>
            ))}
          </ContentText>
        </div>
      ))}
    </div>
  );
};

export default ProcessContent;

const StepText = styled.div`
  font-size: 28px;
  font-family: Pretendard-Medium;
  margin: 50px 0 21px 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContentText = styled.div`
  font-size: 20px;
  margin: 0 0 100px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
