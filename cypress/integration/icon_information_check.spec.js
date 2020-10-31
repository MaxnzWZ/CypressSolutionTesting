import * as CalculatorPage from "../pages/CalculatorPage";

const information = {
  currentAgeInfo: ["This calculator has an age limit of 64 years old as you need to be under the age of 65 to join KiwiSaver."],
  employmentStatusInfo: [
    "If you are earning a salary or wage, select ‘Employed’. Your employer contributions will be automatically calculated at a rate of 3% of your before-tax salary or wages. You can also select ‘Self-employed’ or ‘Not employed’ and then enter below (in the Voluntary contributions field), the amount and frequency of any contributions that you wish to make.",
  ],
  currentKiwiSaverBalanceInfo: [
    "If you do not have a KiwiSaver account, then leave this field blank.",
  ],
  salaryOrWagesPerYearInfo: [
    "Only include your total annual income that is paid to you by your employer(s). Other income sources such as rental income or dividends should not be included.",
  ],
  kiwiSaverMemberContribution: [
    "You can choose to contribute a regular amount equal to 3%, 4%, 6%, 8% or 10% of your before-tax salary or wage. If you do not select a rate, your rate will be 3%.",
  ],
  voluntaryContributionsInfo: [
    "If you are 'Self-Employed' or 'Not employed', you can make direct contributions to your KiwiSaver account. If you are 'Employed', you can make voluntary contributions in addition to your regular employee contributions.",
  ],
  riskProfileContentInfo: [
    "The risk profile affects your potential investment returns:",
    "Low risk investments usually contain mostly income assets. Generally, investments of this nature can be expected to deliver modest but more consistent returns. They are less likely to go up and down, but will usually provide lower returns over the long term.",
    "Medium risk investments are spread more evenly between income assets and growth assets. Generally, these types of investments can be expected to provide moderate levels of returns with moderate levels of investment risk. Returns will vary and may be low or negative in some years.",
    "High risk investments usually contain mostly growth assets. Investments with more exposure to growth assets have the potential for higher long-term returns, but they are more likely to go up and down in the short term and will experience periods of negative returns.",
    "You can also use our ",
    "KiwiSaver Risk Profiler",
    " to help determine your tolerence to risk.",
  ],
  savingsGoalAtRetirementInfo: [
    "Enter the amount you would like to have saved when you reach your intended retirement age. If you aren’t sure what this amount is, you can leave it blank or use the",
    "Sorted Retirement Planner",
  ],
};

const targetLinks = {
  riskProfile: "http://www.westpac.co.nz/investment-kiwisaver/calculators/kiwisaver-risk-profiler/",
  savingsGoalAtRetirement: "http://www.sorted.org.nz/calculators/retirement",
}

const containerLocators = {
  currentAge: ".wpnib-field-current-age",
  employmentStatus: ".wpnib-field-employment-status",
  annualIncome: ".wpnib-field-annual-income",
  kiwiSaverMemberContribution: ".wpnib-field-kiwisaver-member-contribution",
  currentKiwiSaverBalance: ".wpnib-field-kiwi-saver-balance",
  voluntaryContributions: ".wpnib-field-voluntary-contributions",
  riskProfile: ".wpnib-field-risk-profile",
  savingsGoalAtRetirement: ".wpnib-field-savings-goal",
};

describe("User Story 1: Check information icons for all fields", () => {
  beforeEach("Open kiwisaver calculator with Employed Status", () => {
    cy.visit("/kiwisaver/calculators/kiwisaver-calculator/");
    cy.contains("h1", "KiwiSaver Retirement Calculator");

    /*
    Select Employed from the dropdown list of Employment status
    Calculator for employed has the complete list of the info icons
    This is the reason why we choose this page for testing all info provided by clicking info icons
    */
    cy.getIframeBody(CalculatorPage.iframeLocator)
    .then(($body) => {
      cy.wrap($body)
        .find("#widget")
        .within(($el) => {
          // Select Employed for Employment Status
          cy.contains("Select").click();
          cy.contains("Employed").click();
          // Make sure the elements already exist in Calculator for Employed Customers
          cy.contains("Salary or wages per year (before tax)");
          cy.contains("KiwiSaver member contribution");
        });
    });   

  });

  it("Check info icon for current age field", () => {
    cy.log("age message: " + information.currentAgeInfo);
    CalculatorPage.checkIconInformation(containerLocators.currentAge, information.currentAgeInfo);
  });

  it("Check info icon for Employment status", () => {
    CalculatorPage.checkIconInformation(containerLocators.employmentStatus, information.employmentStatusInfo);
  });

  it("Check info icon for Salary or Wage per Year (before tax)", () => {
    CalculatorPage.checkIconInformation(containerLocators.annualIncome, information.salaryOrWagesPerYearInfo);
  });

  it("Check info icon for KiwiSaver member contribution", () => {
    CalculatorPage.checkIconInformation(containerLocators.kiwiSaverMemberContribution, information.kiwiSaverMemberContribution);
  });

  it("Check info icon for Current Kiwisaver balance", () => {
    CalculatorPage.checkIconInformation(containerLocators.currentKiwiSaverBalance, information.currentKiwiSaverBalanceInfo);
  });

  it("Check info icon for Voluntary contributions", () => {
    CalculatorPage.checkIconInformation(containerLocators.voluntaryContributions, information.voluntaryContributionsInfo);
  });

  it("Check info icon for Risk profile", () => {
    CalculatorPage.checkIconInformation(containerLocators.riskProfile, information.riskProfileContentInfo);
  });

  it("Check info icon for Savings goal at retirement", () => {
    CalculatorPage.checkIconInformation(containerLocators.savingsGoalAtRetirement, information.savingsGoalAtRetirementInfo);
  });

  it("Check the link of icon info for Risk profile", () => {
    CalculatorPage.checkLinkInformation(containerLocators.riskProfile, information.riskProfileContentInfo[5], targetLinks.riskProfile);
  });

  it("Check the link of icon info for Savings goal at retirement", () => {
    CalculatorPage.checkLinkInformation(containerLocators.savingsGoalAtRetirement, information.savingsGoalAtRetirementInfo[1], targetLinks.savingsGoalAtRetirement);
  });
});
