//Ξ
export const expectedTS = 0;
export const expectedNOA = 8;
export const expectedNSFA = 4;
export const expectedNSFG = 3; //!
export const expectedNOAJS = 12;
export const expectedTNG = 4;
export const expectedCLA = 2;
export const expectedCFC = 6; //!
//DOAF
export const expectedAGD = 2.75;
export const expectedMGD = 3;
export const expectedGH = 0.51;
export const expectedGM = 2;

export const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<!-- origin at X=0.0 Y=-145.0 -->
<bpmn2:definitions xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:ext="http://org.eclipse.bpmn2/ext" id="Definitions_1" exporter="org.eclipse.bpmn2.modeler.core" exporterVersion="1.2.4.Final-v20160330-1625-B110" targetNamespace="http://org.eclipse.bpmn2/default/process">
  <bpmn2:process id="process_1" name="Default Process" isExecutable="false">
    <bpmn2:startEvent id="StartEvent_1" name="Start Event 1">
      <bpmn2:outgoing>SequenceFlow_2</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:task id="Task_1" name="locate and reuse designs">
      <bpmn2:incoming>SequenceFlow_2</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_14</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_3</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_4</bpmn2:outgoing>
      <bpmn2:ioSpecification id="InputOutputSpecification_1">
        <bpmn2:dataOutput id="DataOutput_1" name="output1"/>
        <bpmn2:dataOutput id="DataOutput_2" name="output2"/>
        <bpmn2:inputSet id="InputSet_1" name="Input Set 1"/>
        <bpmn2:outputSet id="OutputSet_1" name="Output Set 1">
          <bpmn2:dataOutputRefs>DataOutput_1</bpmn2:dataOutputRefs>
          <bpmn2:dataOutputRefs>DataOutput_2</bpmn2:dataOutputRefs>
        </bpmn2:outputSet>
      </bpmn2:ioSpecification>
      <bpmn2:dataOutputAssociation id="DataOutputAssociation_1">
        <bpmn2:sourceRef>DataOutput_1</bpmn2:sourceRef>
        <bpmn2:targetRef>DataObject_2</bpmn2:targetRef>
      </bpmn2:dataOutputAssociation>
      <bpmn2:dataOutputAssociation id="DataOutputAssociation_2">
        <bpmn2:sourceRef>DataOutput_2</bpmn2:sourceRef>
        <bpmn2:targetRef>DataObject_4</bpmn2:targetRef>
      </bpmn2:dataOutputAssociation>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_2" sourceRef="StartEvent_1" targetRef="Task_1"/>
    <bpmn2:subProcess id="SubProcess_1" name="">
      <bpmn2:incoming>SequenceFlow_3</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_10</bpmn2:outgoing>
      <bpmn2:startEvent id="StartEvent_2" name="Start Event 2">
        <bpmn2:outgoing>SequenceFlow_5</bpmn2:outgoing>
      </bpmn2:startEvent>
      <bpmn2:task id="Task_2" name="review previous designs">
        <bpmn2:incoming>SequenceFlow_5</bpmn2:incoming>
        <bpmn2:outgoing>SequenceFlow_6</bpmn2:outgoing>
        <bpmn2:ioSpecification id="InputOutputSpecification_6">
          <bpmn2:dataInput id="DataInput_4" name="input1"/>
          <bpmn2:dataInput id="DataInput_6" name="input2"/>
          <bpmn2:inputSet id="InputSet_6" name="Input Set 6">
            <bpmn2:dataInputRefs>DataInput_4</bpmn2:dataInputRefs>
            <bpmn2:dataInputRefs>DataInput_6</bpmn2:dataInputRefs>
          </bpmn2:inputSet>
          <bpmn2:outputSet id="OutputSet_6" name="Output Set 6"/>
        </bpmn2:ioSpecification>
        <bpmn2:dataInputAssociation id="DataInputAssociation_4">
          <bpmn2:sourceRef>DataObject_2</bpmn2:sourceRef>
          <bpmn2:targetRef>DataInput_4</bpmn2:targetRef>
        </bpmn2:dataInputAssociation>
        <bpmn2:dataInputAssociation id="DataInputAssociation_6">
          <bpmn2:sourceRef>DataObject_4</bpmn2:sourceRef>
          <bpmn2:targetRef>DataInput_6</bpmn2:targetRef>
        </bpmn2:dataInputAssociation>
      </bpmn2:task>
      <bpmn2:sequenceFlow id="SequenceFlow_5" sourceRef="StartEvent_2" targetRef="Task_2"/>
      <bpmn2:task id="Task_3" name="update emectrical design">
        <bpmn2:incoming>SequenceFlow_6</bpmn2:incoming>
        <bpmn2:outgoing>SequenceFlow_7</bpmn2:outgoing>
        <bpmn2:ioSpecification id="InputOutputSpecification_7">
          <bpmn2:dataInput id="DataInput_5" name="input1"/>
          <bpmn2:inputSet id="InputSet_7" name="Input Set 7">
            <bpmn2:dataInputRefs>DataInput_5</bpmn2:dataInputRefs>
          </bpmn2:inputSet>
          <bpmn2:outputSet id="OutputSet_7" name="Output Set 7"/>
        </bpmn2:ioSpecification>
        <bpmn2:dataInputAssociation id="DataInputAssociation_5">
          <bpmn2:sourceRef>DataObject_2</bpmn2:sourceRef>
          <bpmn2:targetRef>DataInput_5</bpmn2:targetRef>
        </bpmn2:dataInputAssociation>
      </bpmn2:task>
      <bpmn2:sequenceFlow id="SequenceFlow_6" sourceRef="Task_2" targetRef="Task_3"/>
      <bpmn2:dataObject id="DataObject_6" name="Data Object 5"/>
      <bpmn2:dataObject id="DataObject_8" name="Data Object 7"/>
      <bpmn2:task id="Task_4" name="test electrical design">
        <bpmn2:incoming>SequenceFlow_7</bpmn2:incoming>
        <bpmn2:outgoing>SequenceFlow_8</bpmn2:outgoing>
        <bpmn2:ioSpecification id="InputOutputSpecification_2">
          <bpmn2:dataOutput id="DataOutput_3" name="output1"/>
          <bpmn2:inputSet id="InputSet_2" name="Input Set 2"/>
          <bpmn2:outputSet id="OutputSet_2" name="Output Set 2">
            <bpmn2:dataOutputRefs>DataOutput_3</bpmn2:dataOutputRefs>
          </bpmn2:outputSet>
        </bpmn2:ioSpecification>
        <bpmn2:dataOutputAssociation id="DataOutputAssociation_3">
          <bpmn2:sourceRef>DataOutput_3</bpmn2:sourceRef>
          <bpmn2:targetRef>DataObject_10</bpmn2:targetRef>
        </bpmn2:dataOutputAssociation>
      </bpmn2:task>
      <bpmn2:sequenceFlow id="SequenceFlow_7" sourceRef="Task_3" targetRef="Task_4"/>
      <bpmn2:exclusiveGateway id="ExclusiveGateway_1" name="">
        <bpmn2:incoming>SequenceFlow_8</bpmn2:incoming>
        <bpmn2:outgoing>SequenceFlow_9</bpmn2:outgoing>
      </bpmn2:exclusiveGateway>
      <bpmn2:sequenceFlow id="SequenceFlow_8" sourceRef="Task_4" targetRef="ExclusiveGateway_1"/>
      <bpmn2:endEvent id="EndEvent_2" name="End Event 2">
        <bpmn2:incoming>SequenceFlow_9</bpmn2:incoming>
      </bpmn2:endEvent>
      <bpmn2:sequenceFlow id="SequenceFlow_9" sourceRef="ExclusiveGateway_1" targetRef="EndEvent_2"/>
      <bpmn2:dataObject id="DataObject_10" name=""/>
    </bpmn2:subProcess>
    <bpmn2:sequenceFlow id="SequenceFlow_3" sourceRef="Task_1" targetRef="SubProcess_1"/>
    <bpmn2:subProcess id="SubProcess_2" name="">
      <bpmn2:incoming>SequenceFlow_4</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_22</bpmn2:outgoing>
      <bpmn2:startEvent id="StartEvent_3" name="Start Event 2">
        <bpmn2:outgoing>SequenceFlow_16</bpmn2:outgoing>
      </bpmn2:startEvent>
      <bpmn2:task id="Task_7" name="review previous designs">
        <bpmn2:incoming>SequenceFlow_16</bpmn2:incoming>
        <bpmn2:incoming>SequenceFlow_21</bpmn2:incoming>
        <bpmn2:outgoing>SequenceFlow_17</bpmn2:outgoing>
        <bpmn2:ioSpecification id="InputOutputSpecification_4">
          <bpmn2:dataInput id="DataInput_1" name="input1"/>
          <bpmn2:dataInput id="DataInput_3" name="input2"/>
          <bpmn2:inputSet id="InputSet_4" name="Input Set 4">
            <bpmn2:dataInputRefs>DataInput_1</bpmn2:dataInputRefs>
            <bpmn2:dataInputRefs>DataInput_3</bpmn2:dataInputRefs>
          </bpmn2:inputSet>
          <bpmn2:outputSet id="OutputSet_4" name="Output Set 4"/>
        </bpmn2:ioSpecification>
        <bpmn2:dataInputAssociation id="DataInputAssociation_1">
          <bpmn2:sourceRef>DataObject_4</bpmn2:sourceRef>
          <bpmn2:targetRef>DataInput_1</bpmn2:targetRef>
        </bpmn2:dataInputAssociation>
        <bpmn2:dataInputAssociation id="DataInputAssociation_3">
          <bpmn2:sourceRef>DataObject_2</bpmn2:sourceRef>
          <bpmn2:targetRef>DataInput_3</bpmn2:targetRef>
        </bpmn2:dataInputAssociation>
      </bpmn2:task>
      <bpmn2:sequenceFlow id="SequenceFlow_16" sourceRef="StartEvent_3" targetRef="Task_7"/>
      <bpmn2:task id="Task_8" name="update emectrical design">
        <bpmn2:incoming>SequenceFlow_17</bpmn2:incoming>
        <bpmn2:outgoing>SequenceFlow_18</bpmn2:outgoing>
        <bpmn2:ioSpecification id="InputOutputSpecification_5">
          <bpmn2:dataInput id="DataInput_2" name="input1"/>
          <bpmn2:inputSet id="InputSet_5" name="Input Set 5">
            <bpmn2:dataInputRefs>DataInput_2</bpmn2:dataInputRefs>
          </bpmn2:inputSet>
          <bpmn2:outputSet id="OutputSet_5" name="Output Set 5"/>
        </bpmn2:ioSpecification>
        <bpmn2:dataInputAssociation id="DataInputAssociation_2">
          <bpmn2:sourceRef>DataObject_4</bpmn2:sourceRef>
          <bpmn2:targetRef>DataInput_2</bpmn2:targetRef>
        </bpmn2:dataInputAssociation>
      </bpmn2:task>
      <bpmn2:sequenceFlow id="SequenceFlow_17" sourceRef="Task_7" targetRef="Task_8"/>
      <bpmn2:task id="Task_9" name="test physical design">
        <bpmn2:incoming>SequenceFlow_18</bpmn2:incoming>
        <bpmn2:outgoing>SequenceFlow_19</bpmn2:outgoing>
      </bpmn2:task>
      <bpmn2:sequenceFlow id="SequenceFlow_18" sourceRef="Task_8" targetRef="Task_9"/>
      <bpmn2:exclusiveGateway id="ExclusiveGateway_3" name="" gatewayDirection="Diverging">
        <bpmn2:incoming>SequenceFlow_19</bpmn2:incoming>
        <bpmn2:outgoing>SequenceFlow_20</bpmn2:outgoing>
        <bpmn2:outgoing>SequenceFlow_21</bpmn2:outgoing>
      </bpmn2:exclusiveGateway>
      <bpmn2:sequenceFlow id="SequenceFlow_19" sourceRef="Task_9" targetRef="ExclusiveGateway_3"/>
      <bpmn2:endEvent id="EndEvent_4" name="End Event 4">
        <bpmn2:incoming>SequenceFlow_20</bpmn2:incoming>
      </bpmn2:endEvent>
      <bpmn2:sequenceFlow id="SequenceFlow_20" sourceRef="ExclusiveGateway_3" targetRef="EndEvent_4"/>
      <bpmn2:dataObject id="DataObject_16" name=""/>
      <bpmn2:dataObject id="DataObject_18" name=""/>
      <bpmn2:sequenceFlow id="SequenceFlow_21" sourceRef="ExclusiveGateway_3" targetRef="Task_7"/>
    </bpmn2:subProcess>
    <bpmn2:sequenceFlow id="SequenceFlow_4" sourceRef="Task_1" targetRef="SubProcess_2"/>
    <bpmn2:dataObject id="DataObject_2" name=""/>
    <bpmn2:dataObject id="DataObject_4" name=""/>
    <bpmn2:parallelGateway id="ParallelGateway_1" name="" gatewayDirection="Converging">
      <bpmn2:incoming>SequenceFlow_10</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_22</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_11</bpmn2:outgoing>
    </bpmn2:parallelGateway>
    <bpmn2:sequenceFlow id="SequenceFlow_10" sourceRef="SubProcess_1" targetRef="ParallelGateway_1"/>
    <bpmn2:task id="Task_5" name="test complete design">
      <bpmn2:incoming>SequenceFlow_11</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_12</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="SequenceFlow_11" sourceRef="ParallelGateway_1" targetRef="Task_5"/>
    <bpmn2:exclusiveGateway id="ExclusiveGateway_2" name="" gatewayDirection="Diverging">
      <bpmn2:incoming>SequenceFlow_12</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_13</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_14</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:sequenceFlow id="SequenceFlow_12" sourceRef="Task_5" targetRef="ExclusiveGateway_2"/>
    <bpmn2:endEvent id="EndEvent_3" name="End Event 3">
      <bpmn2:incoming>SequenceFlow_13</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_13" sourceRef="ExclusiveGateway_2" targetRef="EndEvent_3"/>
    <bpmn2:sequenceFlow id="SequenceFlow_14" sourceRef="ExclusiveGateway_2" targetRef="Task_1"/>
    <bpmn2:dataObject id="DataObject_12" name=""/>
    <bpmn2:dataObject id="DataObject_14" name=""/>
    <bpmn2:sequenceFlow id="SequenceFlow_22" sourceRef="SubProcess_2" targetRef="ParallelGateway_1"/>
    <bpmn2:association id="Association_1" sourceRef="DataObject_6" targetRef="SequenceFlow_5"/>
    <bpmn2:association id="Association_4" sourceRef="DataObject_8" targetRef="SequenceFlow_6"/>
    <bpmn2:association id="Association_5" sourceRef="DataObject_12" targetRef="SequenceFlow_14"/>
    <bpmn2:association id="Association_6" sourceRef="DataObject_14" targetRef="SequenceFlow_14"/>
    <bpmn2:association id="Association_8" sourceRef="DataObject_16" targetRef="SequenceFlow_17"/>
    <bpmn2:association id="Association_9" sourceRef="DataObject_18" targetRef="SequenceFlow_18"/>
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1" name="Default Process Diagram">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="process_1">
      <bpmndi:BPMNShape id="BPMNShape_SubProcess_1" bpmnElement="SubProcess_1" isExpanded="true">
        <dc:Bounds height="160.0" width="662.0" x="214.0" y="85.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_4" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_SubProcess_2" bpmnElement="SubProcess_2" isExpanded="true">
        <dc:Bounds height="169.0" width="641.0" x="271.0" y="440.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_6" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_1" bpmnElement="StartEvent_1">
        <dc:Bounds height="36.0" width="36.0" x="20.0" y="325.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_1" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="68.0" x="4.0" y="361.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_1" bpmnElement="Task_1">
        <dc:Bounds height="50.0" width="90.0" x="88.0" y="318.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_2" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="30.0" width="87.0" x="89.0" y="328.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_DataObject_1" bpmnElement="DataObject_2">
        <dc:Bounds height="50.0" width="36.0" x="289.0" y="292.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_8" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_DataObject_2" bpmnElement="DataObject_4">
        <dc:Bounds height="50.0" width="36.0" x="239.0" y="357.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_9" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_StartEvent_1" bpmnElement="StartEvent_2">
        <dc:Bounds height="36.0" width="36.0" x="234.0" y="112.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_12" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="68.0" x="218.0" y="148.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_2" bpmnElement="Task_2">
        <dc:Bounds height="50.0" width="90.0" x="322.0" y="105.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_13" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="45.0" width="51.0" x="341.0" y="107.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_3" bpmnElement="Task_3">
        <dc:Bounds height="50.0" width="90.0" x="442.0" y="105.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_15" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="45.0" width="61.0" x="456.0" y="107.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_DataObject_3" bpmnElement="DataObject_6">
        <dc:Bounds height="50.0" width="36.0" x="273.0" y="162.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_17" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="74.0" x="254.0" y="212.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_DataObject_4" bpmnElement="DataObject_8">
        <dc:Bounds height="50.0" width="36.0" x="422.0" y="162.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_19" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="74.0" x="403.0" y="212.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_4" bpmnElement="Task_4">
        <dc:Bounds height="50.0" width="90.0" x="572.0" y="105.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_21" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="30.0" width="80.0" x="577.0" y="115.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_ExclusiveGateway_1" bpmnElement="ExclusiveGateway_1" isMarkerVisible="true">
        <dc:Bounds height="50.0" width="50.0" x="702.0" y="105.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_23" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EndEvent_1" bpmnElement="EndEvent_2">
        <dc:Bounds height="36.0" width="36.0" x="820.0" y="112.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_25" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="65.0" x="806.0" y="148.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_DataObject_5" bpmnElement="DataObject_10">
        <dc:Bounds height="50.0" width="36.0" x="697.0" y="175.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_27" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_ParallelGateway_1" bpmnElement="ParallelGateway_1" isMarkerVisible="true">
        <dc:Bounds height="50.0" width="50.0" x="900.0" y="279.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_29" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_5" bpmnElement="Task_5">
        <dc:Bounds height="50.0" width="90.0" x="980.0" y="279.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_31" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="30.0" width="84.0" x="983.0" y="289.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_ExclusiveGateway_2" bpmnElement="ExclusiveGateway_2" isMarkerVisible="true">
        <dc:Bounds height="50.0" width="50.0" x="1100.0" y="279.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_33" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EndEvent_2" bpmnElement="EndEvent_3">
        <dc:Bounds height="36.0" width="36.0" x="1197.0" y="286.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_35" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="65.0" x="1183.0" y="322.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_DataObject_6" bpmnElement="DataObject_12">
        <dc:Bounds height="50.0" width="36.0" x="654.0" y="15.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_38" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_DataObject_7" bpmnElement="DataObject_14">
        <dc:Bounds height="50.0" width="36.0" x="840.0" y="25.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_39" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_StartEvent_2" bpmnElement="StartEvent_3">
        <dc:Bounds height="36.0" width="36.0" x="291.0" y="489.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_42" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="68.0" x="275.0" y="525.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_7" bpmnElement="Task_7">
        <dc:Bounds height="50.0" width="90.0" x="359.0" y="482.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_45" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="45.0" width="51.0" x="378.0" y="484.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_8" bpmnElement="Task_8">
        <dc:Bounds height="50.0" width="90.0" x="491.0" y="482.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_47" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="45.0" width="61.0" x="505.0" y="484.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Task_9" bpmnElement="Task_9">
        <dc:Bounds height="50.0" width="90.0" x="613.0" y="482.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_49" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="30.0" width="76.0" x="620.0" y="492.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_ExclusiveGateway_3" bpmnElement="ExclusiveGateway_3" isMarkerVisible="true">
        <dc:Bounds height="50.0" width="50.0" x="751.0" y="482.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_51" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EndEvent_3" bpmnElement="EndEvent_4">
        <dc:Bounds height="36.0" width="36.0" x="847.0" y="489.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_53" labelStyle="BPMNLabelStyle_1">
          <dc:Bounds height="15.0" width="65.0" x="833.0" y="525.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_DataObject_8" bpmnElement="DataObject_16">
        <dc:Bounds height="50.0" width="36.0" x="463.0" y="539.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_55" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_DataObject_9" bpmnElement="DataObject_18">
        <dc:Bounds height="50.0" width="36.0" x="585.0" y="539.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_56" labelStyle="BPMNLabelStyle_1"/>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_2" bpmnElement="SequenceFlow_2" sourceElement="BPMNShape_1" targetElement="BPMNShape_Task_1">
        <di:waypoint xsi:type="dc:Point" x="56.0" y="343.0"/>
        <di:waypoint xsi:type="dc:Point" x="72.0" y="343.0"/>
        <di:waypoint xsi:type="dc:Point" x="88.0" y="343.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_3"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_3" bpmnElement="SequenceFlow_3" sourceElement="BPMNShape_Task_1" targetElement="BPMNShape_SubProcess_1">
        <di:waypoint xsi:type="dc:Point" x="178.0" y="330.0"/>
        <di:waypoint xsi:type="dc:Point" x="188.0" y="330.0"/>
        <di:waypoint xsi:type="dc:Point" x="188.0" y="165.0"/>
        <di:waypoint xsi:type="dc:Point" x="214.0" y="165.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_5"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_4" bpmnElement="SequenceFlow_4" sourceElement="BPMNShape_Task_1" targetElement="BPMNShape_SubProcess_2">
        <di:waypoint xsi:type="dc:Point" x="133.0" y="368.0"/>
        <di:waypoint xsi:type="dc:Point" x="133.0" y="619.0"/>
        <di:waypoint xsi:type="dc:Point" x="591.0" y="619.0"/>
        <di:waypoint xsi:type="dc:Point" x="591.0" y="609.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_7"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_DataOutputAssociation_1" bpmnElement="DataOutputAssociation_1">
        <di:waypoint xsi:type="dc:Point" x="178.0" y="343.0"/>
        <di:waypoint xsi:type="dc:Point" x="225.0" y="343.0"/>
        <di:waypoint xsi:type="dc:Point" x="225.0" y="317.0"/>
        <di:waypoint xsi:type="dc:Point" x="289.0" y="317.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_10"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_DataOutputAssociation_2" bpmnElement="DataOutputAssociation_2">
        <di:waypoint xsi:type="dc:Point" x="178.0" y="355.0"/>
        <di:waypoint xsi:type="dc:Point" x="226.0" y="355.0"/>
        <di:waypoint xsi:type="dc:Point" x="226.0" y="382.0"/>
        <di:waypoint xsi:type="dc:Point" x="239.0" y="382.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_11"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_5" bpmnElement="SequenceFlow_5" sourceElement="BPMNShape_StartEvent_1" targetElement="BPMNShape_Task_2">
        <di:waypoint xsi:type="dc:Point" x="270.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="312.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="322.0" y="130.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_14"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_6" bpmnElement="SequenceFlow_6" sourceElement="BPMNShape_Task_2" targetElement="BPMNShape_Task_3">
        <di:waypoint xsi:type="dc:Point" x="412.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="427.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="442.0" y="130.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_16"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Association_1" bpmnElement="Association_1" sourceElement="BPMNShape_DataObject_3" targetElement="BPMNEdge_SequenceFlow_5">
        <di:waypoint xsi:type="dc:Point" x="291.0" y="162.0"/>
        <di:waypoint xsi:type="dc:Point" x="291.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="296.0" y="130.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_18"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Association_4" bpmnElement="Association_4" sourceElement="BPMNShape_DataObject_4" targetElement="BPMNEdge_SequenceFlow_6">
        <di:waypoint xsi:type="dc:Point" x="440.0" y="162.0"/>
        <di:waypoint xsi:type="dc:Point" x="440.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="427.0" y="130.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_20"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_7" bpmnElement="SequenceFlow_7" sourceElement="BPMNShape_Task_3" targetElement="BPMNShape_Task_4">
        <di:waypoint xsi:type="dc:Point" x="532.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="562.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="572.0" y="130.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_22"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_8" bpmnElement="SequenceFlow_8" sourceElement="BPMNShape_Task_4" targetElement="BPMNShape_ExclusiveGateway_1">
        <di:waypoint xsi:type="dc:Point" x="662.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="692.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="702.0" y="130.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_24"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_9" bpmnElement="SequenceFlow_9" sourceElement="BPMNShape_ExclusiveGateway_1" targetElement="BPMNShape_EndEvent_1">
        <di:waypoint xsi:type="dc:Point" x="752.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="786.0" y="130.0"/>
        <di:waypoint xsi:type="dc:Point" x="820.0" y="130.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_26"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_DataOutputAssociation_3" bpmnElement="DataOutputAssociation_3">
        <di:waypoint xsi:type="dc:Point" x="617.0" y="155.0"/>
        <di:waypoint xsi:type="dc:Point" x="617.0" y="200.0"/>
        <di:waypoint xsi:type="dc:Point" x="697.0" y="200.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_28"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_10" bpmnElement="SequenceFlow_10" sourceElement="BPMNShape_SubProcess_1" targetElement="BPMNShape_ParallelGateway_1">
        <di:waypoint xsi:type="dc:Point" x="876.0" y="165.0"/>
        <di:waypoint xsi:type="dc:Point" x="925.0" y="165.0"/>
        <di:waypoint xsi:type="dc:Point" x="925.0" y="279.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_30"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_11" bpmnElement="SequenceFlow_11" sourceElement="BPMNShape_ParallelGateway_1" targetElement="BPMNShape_Task_5">
        <di:waypoint xsi:type="dc:Point" x="950.0" y="304.0"/>
        <di:waypoint xsi:type="dc:Point" x="965.0" y="304.0"/>
        <di:waypoint xsi:type="dc:Point" x="980.0" y="304.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_32"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_12" bpmnElement="SequenceFlow_12" sourceElement="BPMNShape_Task_5" targetElement="BPMNShape_ExclusiveGateway_2">
        <di:waypoint xsi:type="dc:Point" x="1070.0" y="304.0"/>
        <di:waypoint xsi:type="dc:Point" x="1085.0" y="304.0"/>
        <di:waypoint xsi:type="dc:Point" x="1100.0" y="304.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_34"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_13" bpmnElement="SequenceFlow_13" sourceElement="BPMNShape_ExclusiveGateway_2" targetElement="BPMNShape_EndEvent_2">
        <di:waypoint xsi:type="dc:Point" x="1150.0" y="304.0"/>
        <di:waypoint xsi:type="dc:Point" x="1180.0" y="304.0"/>
        <di:waypoint xsi:type="dc:Point" x="1180.0" y="304.0"/>
        <di:waypoint xsi:type="dc:Point" x="1197.0" y="304.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_36"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_14" bpmnElement="SequenceFlow_14" sourceElement="BPMNShape_ExclusiveGateway_2" targetElement="BPMNShape_Task_1">
        <di:waypoint xsi:type="dc:Point" x="1125.0" y="279.0"/>
        <di:waypoint xsi:type="dc:Point" x="1125.0" y="0.0"/>
        <di:waypoint xsi:type="dc:Point" x="133.0" y="0.0"/>
        <di:waypoint xsi:type="dc:Point" x="133.0" y="318.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_37"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Association_5" bpmnElement="Association_5" sourceElement="BPMNShape_DataObject_6" targetElement="BPMNEdge_SequenceFlow_14">
        <di:waypoint xsi:type="dc:Point" x="654.0" y="40.0"/>
        <di:waypoint xsi:type="dc:Point" x="610.0" y="40.0"/>
        <di:waypoint xsi:type="dc:Point" x="610.0" y="0.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_40"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Association_6" bpmnElement="Association_6" sourceElement="BPMNShape_DataObject_7" targetElement="BPMNEdge_SequenceFlow_14">
        <di:waypoint xsi:type="dc:Point" x="858.0" y="25.0"/>
        <di:waypoint xsi:type="dc:Point" x="858.0" y="0.0"/>
        <di:waypoint xsi:type="dc:Point" x="610.0" y="0.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_41"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_16" bpmnElement="SequenceFlow_16" sourceElement="BPMNShape_StartEvent_2" targetElement="BPMNShape_Task_7">
        <di:waypoint xsi:type="dc:Point" x="327.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="343.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="359.0" y="507.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_46"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_17" bpmnElement="SequenceFlow_17" sourceElement="BPMNShape_Task_7" targetElement="BPMNShape_Task_8">
        <di:waypoint xsi:type="dc:Point" x="449.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="470.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="491.0" y="507.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_48"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_18" bpmnElement="SequenceFlow_18" sourceElement="BPMNShape_Task_8" targetElement="BPMNShape_Task_9">
        <di:waypoint xsi:type="dc:Point" x="581.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="603.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="613.0" y="507.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_50"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_19" bpmnElement="SequenceFlow_19" sourceElement="BPMNShape_Task_9" targetElement="BPMNShape_ExclusiveGateway_3">
        <di:waypoint xsi:type="dc:Point" x="703.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="740.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="751.0" y="507.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_52"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_20" bpmnElement="SequenceFlow_20" sourceElement="BPMNShape_ExclusiveGateway_3" targetElement="BPMNShape_EndEvent_3">
        <di:waypoint xsi:type="dc:Point" x="801.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="837.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="847.0" y="507.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_54"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_21" bpmnElement="SequenceFlow_21" sourceElement="BPMNShape_ExclusiveGateway_3" targetElement="BPMNShape_Task_7">
        <di:waypoint xsi:type="dc:Point" x="776.0" y="482.0"/>
        <di:waypoint xsi:type="dc:Point" x="776.0" y="463.0"/>
        <di:waypoint xsi:type="dc:Point" x="419.0" y="463.0"/>
        <di:waypoint xsi:type="dc:Point" x="419.0" y="482.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_57"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Association_8" bpmnElement="Association_8" sourceElement="BPMNShape_DataObject_8" targetElement="BPMNEdge_SequenceFlow_17">
        <di:waypoint xsi:type="dc:Point" x="481.0" y="539.0"/>
        <di:waypoint xsi:type="dc:Point" x="481.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="470.0" y="507.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_58"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Association_9" bpmnElement="Association_9" sourceElement="BPMNShape_DataObject_9" targetElement="BPMNEdge_SequenceFlow_18">
        <di:waypoint xsi:type="dc:Point" x="603.0" y="539.0"/>
        <di:waypoint xsi:type="dc:Point" x="603.0" y="507.0"/>
        <di:waypoint xsi:type="dc:Point" x="597.0" y="507.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_59"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_SequenceFlow_22" bpmnElement="SequenceFlow_22" sourceElement="BPMNShape_SubProcess_2" targetElement="BPMNShape_ParallelGateway_1">
        <di:waypoint xsi:type="dc:Point" x="912.0" y="524.0"/>
        <di:waypoint xsi:type="dc:Point" x="925.0" y="524.0"/>
        <di:waypoint xsi:type="dc:Point" x="925.0" y="329.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_60"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_DataInputAssociation_1" bpmnElement="DataInputAssociation_1">
        <di:waypoint xsi:type="dc:Point" x="251.0" y="407.0"/>
        <di:waypoint xsi:type="dc:Point" x="251.0" y="542.0"/>
        <di:waypoint xsi:type="dc:Point" x="404.0" y="542.0"/>
        <di:waypoint xsi:type="dc:Point" x="404.0" y="532.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_61"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_DataInputAssociation_2" bpmnElement="DataInputAssociation_2">
        <di:waypoint xsi:type="dc:Point" x="263.0" y="407.0"/>
        <di:waypoint xsi:type="dc:Point" x="263.0" y="590.0"/>
        <di:waypoint xsi:type="dc:Point" x="536.0" y="590.0"/>
        <di:waypoint xsi:type="dc:Point" x="536.0" y="532.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_62"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_DataInputAssociation_3" bpmnElement="DataInputAssociation_3">
        <di:waypoint xsi:type="dc:Point" x="307.0" y="342.0"/>
        <di:waypoint xsi:type="dc:Point" x="307.0" y="438.0"/>
        <di:waypoint xsi:type="dc:Point" x="389.0" y="438.0"/>
        <di:waypoint xsi:type="dc:Point" x="389.0" y="482.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_63"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_DataInputAssociation_4" bpmnElement="DataInputAssociation_4">
        <di:waypoint xsi:type="dc:Point" x="307.0" y="292.0"/>
        <di:waypoint xsi:type="dc:Point" x="307.0" y="259.0"/>
        <di:waypoint xsi:type="dc:Point" x="382.0" y="259.0"/>
        <di:waypoint xsi:type="dc:Point" x="382.0" y="155.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_64"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_DataInputAssociation_5" bpmnElement="DataInputAssociation_5">
        <di:waypoint xsi:type="dc:Point" x="325.0" y="317.0"/>
        <di:waypoint xsi:type="dc:Point" x="487.0" y="317.0"/>
        <di:waypoint xsi:type="dc:Point" x="487.0" y="155.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_65"/>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_DataInputAssociation_6" bpmnElement="DataInputAssociation_6">
        <di:waypoint xsi:type="dc:Point" x="257.0" y="357.0"/>
        <di:waypoint xsi:type="dc:Point" x="257.0" y="231.0"/>
        <di:waypoint xsi:type="dc:Point" x="352.0" y="231.0"/>
        <di:waypoint xsi:type="dc:Point" x="352.0" y="155.0"/>
        <bpmndi:BPMNLabel id="BPMNLabel_66"/>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="BPMNLabelStyle_1">
      <dc:Font name="arial" size="9.0"/>
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>
`;
