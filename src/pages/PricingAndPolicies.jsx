import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  color: #2e7d32;
  border-bottom: 2px solid #2e7d32;
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
`;

const Th = styled.th`
  background: #2e7d32;
  color: white;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const PricingAndPolicies = () => {
  return (
    <Container>
      <Title>Pricing & Policies</Title>

      <Section>
        <Heading>Service Pricing Estimates (AOV) - Based on Common Crops</Heading>
        <Table>
          <thead>
            <tr>
              <Th>Service Type</Th>
              <Th>Example Crops</Th>
              <Th>Estimated Service Cost (INR)</Th>
              <Th>AOV Estimate per Booking (INR)</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Drone Spraying</Td>
              <Td>Paddy, Wheat, Mustard, Chilli</Td>
              <Td>₹500-₹2,500 per acre</Td>
              <Td>₹1,500 (avg.)</Td>
            </tr>
            <tr>
              <Td>Soil Testing</Td>
              <Td>Any crop</Td>
              <Td>₹300-₹1,200 per sample</Td>
              <Td>₹750 (avg.)</Td>
            </tr>
            <tr>
              <Td>Tractor & Equipment Rental</Td>
              <Td>Sugarcane, Maize, Pulses</Td>
              <Td>₹800-₹4,500 per use</Td>
              <Td>₹2,500 (avg.)</Td>
            </tr>
            <tr>
              <Td>Harvesting & Post-Harvest Processing</Td>
              <Td>Tomato, Potato, Onion</Td>
              <Td>₹1,500-₹6,000 per acre</Td>
              <Td>₹3,000 (avg.)</Td>
            </tr>
            <tr>
              <Td>Farm Advisory & Consultation</Td>
              <Td>All crops</Td>
              <Td>₹500-₹2,000 per session</Td>
              <Td>₹1,000 (avg.)</Td>
            </tr>
          </tbody>
        </Table>
        <ListItem><strong>AOV Range for Services:</strong> ₹750₹3,000 per booking.</ListItem>
        <ListItem><strong>Average AOV Across Services:</strong> 1,500 per booking.</ListItem>
      </Section>

      <Section>
        <Heading>1.Vendor Commission Model & Wallet Top-Up</Heading>
        <List>
          <ListItem><strong>Vendors Top-Up Wallets:</strong> Vendors must add money to their wallets to process bookings.</ListItem>
          <ListItem><strong>Commission Deduction:</strong> A small commission is deducted per service booked.</ListItem>
          <ListItem><strong>Farmer Costs:</strong> Farmers pay vendors directly; no commission is charged to farmers.</ListItem>
          <ListItem><strong>Runner Model:</strong> Runners coordinate with vendors and charge farmers for service fulfillment.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>2.Refund Policy & Timeline</Heading>
        <List>
          <ListItem><strong>Refund Eligibility:</strong> Refunds are applicable only if the vendor cancels before execution.</ListItem>
          <ListItem><strong>Processing Time:</strong> Refunds (after deducting PG fees) are processed within 5-7 working days.</ListItem>
          <ListItem><strong>Non-Refundable Cases:</strong> If a service has been executed or partially completed, refunds are not applicable.</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default PricingAndPolicies;