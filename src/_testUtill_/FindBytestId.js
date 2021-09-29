

const findByTestId = (wrapper, testId) => wrapper.find(`[data-test="${testId}"]`);

export default findByTestId;
